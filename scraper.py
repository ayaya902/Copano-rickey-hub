import time
import random
import json
import os
import urllib.parse
import base64
import requests
import datetime
from bs4 import BeautifulSoup

# ==========================================
# 1. 基本設定エリア
# ==========================================
TOP_URL = "https://www.jbis.or.jp/"
SIRE_URL = "https://www.jbis.or.jp/horse/0001123166/"
ENTRY_URL = "https://www.jbis.or.jp/horse/0001123166/sire/entry/"

GITHUB_REPO = "ayaya902/Copano-rickey-hub"
FILE_PATH = "rickey_entries.json"
BRANCH = "main"

JRA_COURSES = {"札幌", "函館", "福島", "新潟", "東京", "中山", "中京", "京都", "阪神", "小倉"}
USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:130.0) Gecko/20100101 Firefox/130.0",
]

# GitHub Actionsのシークレットからトークンを読み込む
GITHUB_TOKEN = os.environ.get("MY_GITHUB_TOKEN")

# ==========================================
# 2. 処理関数
# ==========================================
def irregular_sleep(min_minutes, max_minutes, label=""):
    total_seconds = random.uniform(min_minutes * 60, max_minutes * 60)
    print(f"⏳ [{label}] 約 {total_seconds/60:.1f} 分間待機します...")
    time.sleep(total_seconds)

def upload_json_to_github(data_dict):
    if not GITHUB_TOKEN:
        print("⚠️ トークンがありません。")
        return
    print("🚀 GitHubへデータを送信中...")
    url = f"https://api.github.com/repos/{GITHUB_REPO}/contents/{FILE_PATH}"
    headers = {
        "Authorization": f"token {GITHUB_TOKEN}",
        "Accept": "application/vnd.github.v3+json"
    }

    json_str = json.dumps(data_dict, ensure_ascii=False, indent=2)
    content_b64 = base64.b64encode(json_str.encode("utf-8")).decode("utf-8")

    sha = None
    res = requests.get(url, headers=headers)
    if res.status_code == 200:
        sha = res.json().get("sha")

    payload = {
        "message": f"🐎 出走情報自動更新: {data_dict['updated_at']}",
        "content": content_b64,
        "branch": BRANCH
    }
    if sha:
        payload["sha"] = sha 

    put_res = requests.put(url, headers=headers, json=payload)
    if put_res.status_code in [200, 201]:
        print("✅ GitHubへのアップロードに成功しました！")
    else:
        print(f"❌ GitHubへのアップロードに失敗しました: {put_res.text}")

def slow_screen_rickey_entries(target_day="土曜"):
    print(f"=== 🏇 コパノリッキー産駒 [{target_day}分] スクリーニング開始 ===")
    
    session = requests.Session()
    session.headers.update({
        "User-Agent": random.choice(USER_AGENTS),
        "Accept-Language": "ja,en-US;q=0.9,en;q=0.8"
    })

    # 合計待機時間が最大でも約185分（約3時間）に収まるよう調整
    irregular_sleep(15, 40, "Step1: 初回アクセス待機")
    session.get(TOP_URL, timeout=20)

    irregular_sleep(20, 45, "Step2: 馬ページ遷移待機")
    session.headers.update({"Referer": TOP_URL})
    session.get(SIRE_URL, timeout=20)

    irregular_sleep(20, 50, "Step3: 出走情報ページ待機")
    session.headers.update({"Referer": SIRE_URL})
    response = session.get(ENTRY_URL, timeout=20)
    response.encoding = response.apparent_encoding
    soup = BeautifulSoup(response.text, "html.parser")

    tables = soup.find_all("table", class_="tbl-data-04")
    extracted_entries = []

    for table in tables:
        prev_heading = table.find_previous(["h3", "h4", "p"])
        date_text = prev_heading.get_text(strip=True) if prev_heading else ""

        if target_day == "土曜" and "土" not in date_text: continue
        if target_day == "日曜" and "日" not in date_text: continue

        rows = table.find_all("tr")[1:]
        for row in rows:
            cols = [td.get_text(strip=True) for td in row.find_all(["td", "th"])]
            if len(cols) < 9: continue

            course, r_num, race_name, surface, distance, head_count, waku, umaban, horse_name = cols[:9]
            if course not in JRA_COURSES: continue
            
            # 馬ごとの待機時間を1〜2.5分に設定（最大20頭出走でも50分に収まる）
            irregular_sleep(1, 2.5, f"馬データ整形中: {horse_name}")

            encoded_name = urllib.parse.quote(horse_name)
            extracted_entries.append({
                "date_raw": date_text,
                "day_type": target_day,
                "course": course,
                "race_num": f"{r_num}R",
                "condition": f"{surface}{distance}",
                "race_name": race_name,
                "umaban": umaban,
                "horse_name": horse_name,
                "detail_url": f"https://db.netkeiba.com/?pid=horse_list&word={encoded_name}"
            })
    
    jst = datetime.timezone(datetime.timedelta(hours=9))
    now_str = datetime.datetime.now(jst).strftime(f"{target_day[0]}曜 %H:%M")
    
    output_data = {
        "updated_at": now_str,
        "entries": extracted_entries
    }

    upload_json_to_github(output_data)
    print(f"🎉 [{target_day}分] 全工程完了！")

# ==========================================================
# 3. 実行判定（曜日によって自動で切り替え）
# ==========================================================
if __name__ == "__main__":
    jst = datetime.timezone(datetime.timedelta(hours=9))
    weekday = datetime.datetime.now(jst).weekday()

    if weekday == 4: # 金曜日
        slow_screen_rickey_entries(target_day="土曜")
    elif weekday == 5: # 土曜日
        slow_screen_rickey_entries(target_day="日曜")
    else:
        print("今日は金・土曜日ではないため、スキップします。")
