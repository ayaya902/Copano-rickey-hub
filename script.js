// ==========================================
// 1. ボイス検索機能（もっと見る機能追加版）
// ==========================================

// キャラクターストーリー（第1話〜第7話）
const characterStoryData = [
  { id: "ep01_001", category: "キャラクターストーリー", episode: "第1話", timestamp: "00:00:03", text: "あれはまだ私が小さかった頃、かけっこで怪我しちゃった時のこと。" },
  { id: "ep01_002", category: "キャラクターストーリー", episode: "第1話", timestamp: "00:00:11", text: "「しばらくは安静、絶対に動いちゃダメ」って言われて、ずーっとベッドで眠ってた。その眠りの中で……" },
  { id: "ep01_003", category: "キャラクターストーリー", episode: "第1話", timestamp: "00:00:19", text: "……ここ、どこ？" },
  { id: "ep01_004", category: "キャラクターストーリー", episode: "第1話", timestamp: "00:00:25", text: "水の中……？ 川？ 泳いでて溺れちゃったのかな……？ もしかして、このまま溺れちゃうの……？" },
  { id: "ep01_005", category: "キャラクターストーリー", episode: "第1話", timestamp: "00:00:35", text: "浮き上がれないまま、川の底に……！" },
  { id: "ep01_006", category: "キャラクターストーリー", episode: "第1話", timestamp: "00:01:05", text: "そう、あの日から私は風水に目覚め、心からハマった！ そして今——" },
  { id: "ep01_007", category: "キャラクターストーリー", episode: "第1話", timestamp: "00:01:20", text: "そう言わず考えてみて、エアグルーヴさん！ 私たちウマ娘みんなが強く幸せになるには、やっぱり風水をカリキュラムに取り入れるしかないんだから！" },
  { id: "ep01_008", category: "キャラクターストーリー", episode: "第1話", timestamp: "00:01:34", text: "みんなで——" },
  { id: "ep01_009", category: "キャラクターストーリー", episode: "第1話", timestamp: "00:01:47", text: "どうしてわかってくれないのかな……。風水はオカルトじゃない、全然いかがわしくなんかないのに……。" },
  { id: "ep01_010", category: "キャラクターストーリー", episode: "第1話", timestamp: "00:01:59", text: "あそこの君！ もしかしてトレーナーだよね？ どう、私と一緒に風水やってみない？ 興味あるよね？ ね、ね！" },
  { id: "ep01_011", category: "キャラクターストーリー", episode: "第1話", timestamp: "00:02:12", text: "うん、きっとラッキーが足りてないはず！ さあ、私と来て来て！ 初歩的なことからばっちり教えてあげる！" },
  { id: "ep01_012", category: "キャラクターストーリー", episode: "第1話", timestamp: "00:02:26", text: "ほら、よく「ツイてる」とか「ツイてない」とか言うじゃない？ 良くないことが起きると、つい運のせいにしちゃったり。でもあれって、実は運が悪いんじゃない。" },
  { id: "ep01_013", category: "キャラクターストーリー", episode: "第1話", timestamp: "00:02:37", text: "方位の吉凶や五行の相克を理解せず、対処してないだけなんだよね。" },
  { id: "ep01_014", category: "キャラクターストーリー", episode: "第1話", timestamp: "00:02:42", text: "例えば、部屋の模様替えをすると空気まで澄んだような気になるでしょ？ その理由は、家具の配置を変えたことで、睡眠中に心を圧迫する『横梁圧頂（おうりょうあっちょう）』や、散財につながる『漏財宅（ろうざいたく）』を防いだからなの。たとえ無意識にしろね。" },
  { id: "ep01_015", category: "キャラクターストーリー", episode: "第1話", timestamp: "00:03:04", text: "どう、すごいでしょ！ 私の話を聞いて、もっと学んでみたい、広めてみたいって思ったでしょ！？" },
  { id: "ep01_016", category: "キャラクターストーリー", episode: "第1話", timestamp: "00:03:13", text: "えーっ！？ こんなに丁寧に説明したのに、まだわかりにくかった！？ どうにか風水の魅力をズバッと伝えるには……" },
  { id: "ep01_017", category: "キャラクターストーリー", episode: "第1話", timestamp: "00:03:30", text: "あ、ちょっと、どこ行くの！？" },
  { id: "ep01_018", category: "キャラクターストーリー", episode: "第1話", timestamp: "00:03:36", text: "明日の選抜レース！ 明日の選抜レース観に来て！ そこで風水の力、見せてあげる！ こうなったら実践あるのみ！" },
  { id: "ep02_001", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:03:57", text: "やっぱり観に来てくれた！ 関心ないふりしてたけど、本当は風水に興味持ってくれたんだよね！" },
  { id: "ep02_002", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:04:10", text: "私の出るレースはもう少しあと。それまであったかいウーロン茶でも飲んで、心を静めておいて。風水に基づく私の走りを見たら、もう心臓ドッキンドッキン、どうなっても知らないんだから！" },
  { id: "ep02_003", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:04:34", text: "……ちょっと待って。このトレーニング場の磁場、雰囲気が少し変……。もしかして、気の流れが変わった？" },
  { id: "ep02_004", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:04:46", text: "動いたのは目に見える峦頭（らんとう）？ それとも目に見えない理気（りき）？ とにかく次のレース、何かが起こりそう！ このままじゃ良くないかも……！" },
  { id: "ep02_005", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:05:00", text: "うん、気のせいじゃない！ 出走する子たちの様子も少しおかしいし……原因はどこ？ いったい何が……！" },
  { id: "ep02_006", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:05:25", text: "トレーナー！ 急いで、こっちこっち！" },
  { id: "ep02_007", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:05:37", text: "屋上！ ここなら場を広く見れる。時は上から全体を俯瞰するのが一番だから。都市計画に使う地理風水の応用！" },
  { id: "ep02_008", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:05:49", text: "さてと、大きく気が乱れ始めた原因は……あそこ！ あの一角！ トレーナーたちが普段より集中し始めてる。理由はコース改装中の影響。それから次のレース、逃げウマ娘が多いから位置取りを見たいのもありそう。2つが偶然重なったから……！" },
  { id: "ep02_009", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:06:13", text: "トレーナー、このまま走らせたら危険かも！ スタートする前に止めた方が……！ 叫んでもダメ、スマホで連絡しても信じてもらえないかな……。幸い、乱れはこれ以上大きくなりそうにない。どうにか化殺（かさつ）の影響で持ちこたえてくれれば……！" },
  { id: "ep02_010", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:06:58", text: "大事故にならなくてよかった……。ううん、この程度で済んだのも……風水はそんないい加減なものじゃなく、れっきとした学術なんだから！" },
  { id: "ep02_011", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:07:11", text: "ほら、さっき屋上から下を見たでしょ？ で、わかったのは『乾（けん）』の方角、つまり北西にレースを観に来たトレーナーたちが集まってたんだよね。出走するウマ娘たちの意識はみんな乾の方向に引っ張られてた。" },
  { id: "ep02_012", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:07:29", text: "全員の気が大勝負・一攫千金の方位に集中すると、当然細かいこと、例えば目の前のコーナーへの注意はおろそかになる。他の子と接触したり衝突することも考えられる。逢魔（おうま）の曲がり角、八卦の境目にご用心ってわけ！" },
  { id: "ep02_013", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:07:54", text: "これが風水に通じてる私に見えたこと。ううん、私だけじゃなく、風水の知識があれば誰でも気づいて避けられたこと！ 風水はオカルトなんかじゃない、3000年の歴史の中で蓄積され磨かれてきた、環境開運学なんだから！" },
  { id: "ep02_014", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:08:25", text: "ね、これで風水の凄さわかったでしょ？ 未来すべてがその目に見える！ 一緒に広めるぞって気になったよね！？" },
  { id: "ep02_015", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:08:35", text: "えー、君もなかなか頑固だねー！ だったらトドメのもう一押し！ 今から始まる私のレースを観てて！ そこでもう一度はっきり風水の力、見せてあげる！ そうすればさすがに信じるでしょ？ 今度はもっとすごいんだから！" },
  { id: "ep02_016", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:08:54", text: "私は常に大地の気と共にある。本気で走ると、大地の声が聞こえるの。いくぞー！" },
  { id: "ep02_017", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:09:18", text: "スタート！ よし、トラブルもないし陣形も予想通り！ 八卦をかぶせてイメージすればいつも読みやすい。しばらくはこのままついて行って……ここ、最終コーナー手前、陽の勝負のところ！" },
  { id: "ep02_018", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:09:35", text: "周りの気、意識は集中して、あとは大地の声を聞き、気の流れの導くままに走ればいいだけ！ さあ、私の行くべき道は——" },
  { id: "ep02_019", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:09:50", text: "……あれ？ 嘘、なんで……今日は声が聞こえない！？" },
  { id: "ep02_020", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:10:08", text: "違うの、違うんだって！ いつもは大地の声ちゃんと聞こえていい走りできるのに、今日はなんか調子がおかしくて……！ 五行相克（ごぎょうそうこく）？ それとも六殺（ろくさつ）？ あるいは前のレースのトラブルに引っ張られたのか……。" },
  { id: "ep02_021", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:10:46", text: "あ、タルマエ！ 観てたんだ、今のレース……。" },
  { id: "ep02_022", category: "キャラクターストーリー", episode: "第2話", timestamp: "00:11:10", text: "まだ信じてくれてないの、タルマエ！？ 風水の力はちゃんとあるんだから！ でも、今日はどうしちゃったんだろう……。納得いかない……！" },
  { id: "ep03_001", category: "キャラクターストーリー", episode: "第3話", timestamp: "00:11:47", text: "木・火・土・金・水……大吉！ 木・火・土・金・水……大吉っ！" },
  { id: "ep03_002", category: "キャラクターストーリー", episode: "第3話", timestamp: "00:11:59", text: "こんなところかな。次はウッドチップコースで……あ、トレーナー！ うん、不甲斐ないところ見せちゃった分、トレーニングにも一段と気を入れていかないとね！" },
  { id: "ep03_003", category: "キャラクターストーリー", episode: "第3話", timestamp: "00:12:14", text: "えっ？ 違う違う、別にタルマエにもっとトレーニングしろって言われたからやってるわけじゃなくて、このくらいは毎日やってるんだから！ 風水は願いを叶えてくれるものじゃない、努力の方向を教えてくれるもの！" },
  { id: "ep03_004", category: "キャラクターストーリー", episode: "第3話", timestamp: "00:12:37", text: "頑張る気持ちに変わりはないんだけど、この間の大負けはいろいろどうにかしなくちゃね……。まさか大地の声が聞こえないなんて。このままじゃ誰かの力になんて到底なれないし……。" },
  { id: "ep03_005", category: "キャラクターストーリー", episode: "第3話", timestamp: "00:12:59", text: "うん、もちろんいくらでも！ ちょうど休憩入れるところだったし！" },
  { id: "ep03_006", category: "キャラクターストーリー", episode: "第3話", timestamp: "00:13:17", text: "あっ、来々中華軒のおじさん！ その後どう？" },
  { id: "ep03_007", category: "キャラクターストーリー", episode: "第3話", timestamp: "00:14:01", text: "よかったー！ そうだよね、お店がなくなっちゃったら誰もがアンハッピーだもんね。坐して待つより進んで風を！ 勇気の後押し、少しでもできたんなら良かったよ！" },
  { id: "ep03_008", category: "キャラクターストーリー", episode: "第3話", timestamp: "00:14:27", text: "……と、こんな風に、風水ってちょっとした迷いや停滞から救ってくれるものなんだよね。私自身もそうだったし、同じようなウマ娘もたくさん見てきたんだ。風水で軽く背中を押してあげたら、うまくいくことも多くて。" },
  { id: "ep03_009", category: "キャラクターストーリー", episode: "第3話", timestamp: "00:14:43", text: "だから風水をもっとみんなに知ってほしい、で、ハッピーになってほしい！ 風水を知れば不幸を避けて幸せを呼び込める。ゆえに、実際にレースで勝ってその力の素晴らしさをみんなに知らしめようってわけ！" },
  { id: "ep03_010", category: "キャラクターストーリー", episode: "第3話", timestamp: "00:15:01", text: "みんなのためって言うと大げさだけど、やっぱり誰にでもハッピーになってほしいじゃない？ まあ、肝心の私が負けたら説得力も弱まっちゃうんだけど……。まさか大事なレースで大地の声が聞こえないなんて……。" },
  { id: "ep03_011", category: "キャラクターストーリー", episode: "第3話", timestamp: "00:15:27", text: "大地の声？ あ、声って言っても本当に声が聞こえるわけじゃなくて、私が勝手にそう感じてるだけなんだけどね。小学生の頃から、私には大地の声が聞こえるようになった。" },
  { id: "ep03_012", category: "キャラクターストーリー", episode: "第3話", timestamp: "00:15:41", text: "運動会の競走とかで集中してレースをすると、「こう走ればいいよ」って大地の示唆で感じられるようになった。気の流れ、次の周りの動き、全部細かくわかった。だから私は連戦連勝だった！" },
  { id: "ep03_013", category: "キャラクターストーリー", episode: "第3話", timestamp: "00:16:03", text: "鍛えた体を自然と同化し、森羅万象と一つになれば、必ず正しい方向に進め、先頭でゴールできた。だけど、この間の選抜レースでは声が聞きにくかったんだよね。緊張してたせいか、事前の場の整え方を間違えたのか……。" },
  { id: "ep03_014", category: "キャラクターストーリー", episode: "第3話", timestamp: "00:16:26", text: "うーん、自然と一つになるのが風水なのに、距離を感じちゃって一つになれなかったっていうか……。" },
  { id: "ep03_015", category: "キャラクターストーリー", episode: "第3話", timestamp: "00:16:42", text: "えっ、出かけるって……どこへ？" },
  { id: "ep03_016", category: "キャラクターストーリー", episode: "第3話", timestamp: "00:16:49", text: "ピクニック！？ 気分転換には最高かも！ ちょっと山に叫んでみようかなー！" },
  { id: "ep03_017", category: "キャラクターストーリー", episode: "第3話", timestamp: "00:17:08", text: "こういう場所ってやっぱり龍脈（りゅうみゃく）がよく見えるよね。気の流れもビンビンに伝わってくるっていうか……っと、龍脈？ 尾根伝いに走る気の流れみたいなのを感じるでしょ？ それが龍脈。そして——" },
  { id: "ep03_018", category: "キャラクターストーリー", episode: "第3話", timestamp: "00:17:29", text: "その龍脈の出口が『龍穴（りゅうけつ）』！ 山の気は浜に降りてきて吹き出し、パワースポットになってる。こうして集中すると、今日はよく感じられる……龍穴からの気、渦巻く力、全体の気配。" },
  { id: "ep03_019", category: "キャラクターストーリー", episode: "第3話", timestamp: "00:17:47", text: "目を閉じていても浜辺全体がよく見える。大地の声が聞こえる、かくも明瞭に！ うーん、調子は絶好調、私の感覚がおかしくなってるわけじゃない。なのに、あの選抜レースの時、声が聞こえなかったのはどうして……？" },
  { id: "ep03_020", category: "キャラクターストーリー", episode: "第3話", timestamp: "00:18:30", text: "トレーナー、どうかしたの？ ……えっ、「わかった」って、何が！？ 本当に！？" },
  { id: "ep04_001", category: "キャラクターストーリー", episode: "第4話", timestamp: "00:18:57", text: "じゃあトレーナー、行ってくるね！" },
  { id: "ep04_002", category: "キャラクターストーリー", episode: "第4話", timestamp: "00:19:27", text: "押し売りする気とかじゃなくて、トレーナーと話して決めただけだよ。もしかしたらダートの方がいいんじゃないかって。フォームや体型的なことと、それから何より、ダートの方が風水との相性がいいんじゃないかって！ 本気でレースしてみないとわからないけどね。" },
  { id: "ep04_003", category: "キャラクターストーリー", episode: "第4話", timestamp: "00:20:10", text: "わかってるって！ 私だって努力はしてきた。その上で、あとは大地の声さえ聞こえれば……！" },
  { id: "ep04_004", category: "キャラクターストーリー", episode: "第4話", timestamp: "00:20:25", text: "よし、スタートは上々！ ラッキーカラーと方位の関係も申し分なし。そしてダートの感触は……いい感じ！ 本気で走ると馬場の具合がザクザク伝わってくる。でも一番大事なのはそこじゃない。" },
  { id: "ep04_005", category: "キャラクターストーリー", episode: "第4話", timestamp: "00:20:44", text: "問題はこの間聞こえなかった大地の声が聞こえるかどうか。気の流れを感じられなきゃ、大吉上の走りなんてできない！ お願い、どうにか……！ もう少しコース取りは外に、前から飛んでくる砂をかぶらないようにしないと。なんか脚抜きが悪いか……呼吸を整えて……。" },
  { id: "ep04_006", category: "キャラクターストーリー", episode: "第4話", timestamp: "00:21:16", text: "……見える！ わかる！ 気の流れが、大地の声が、場がどうなってるか教えてくれる！ トレーナーの言う通りだったんだ、やっぱり風水との相性はダートの方が——！" },
  { id: "ep04_007", category: "キャラクターストーリー", episode: "第4話", timestamp: "00:22:02", text: "それだ！ うん、どこに位置取るか……！" },
  { id: "ep04_008", category: "キャラクターストーリー", episode: "第4話", timestamp: "00:22:11", text: "風水・東に向けた方が自由に走れる！ 五行相生（ごぎょうそうしょう）、木から火が生まれ、火は土に還る！ 仕掛けどころはあの大きな木を通り過ぎたあたり！ 最終直線、峦頭・理気すべて整った、運勢は万全！ あとはただ、培い積み上げた力を吉方位に全力で——！" },
  { id: "ep04_009", category: "キャラクターストーリー", episode: "第4話", timestamp: "00:23:04", text: "トレーナー、ありがとう！ おかげで最高の走りができちゃった！ 声が聞こえない理由に気づくことができたのは、君が風水を信じ、考えてくれたおかげ！" },
  { id: "ep04_010", category: "キャラクターストーリー", episode: "第4話", timestamp: "00:23:15", text: "というわけで、私はこの素晴らしい風水の力を広めて、落ち込んだり迷ってるみんなをハッピーにしたいんだけど……力、貸してくれる？ 私のトレーナーとして！ 今度こそノーとは言わないよね！？" },
  { id: "ep04_011", category: "キャラクターストーリー", episode: "第4話", timestamp: "00:23:37", text: "なかなか見つからないんだよね、風水を心から信じて、みんなを幸せにしたいって願ってくれる人。君と私はまさしく相生（そうしょう）！ 出会えた私は本当にラッキーでハッピーだよ！" },
  { id: "ep04_012", category: "キャラクターストーリー", episode: "第4話", timestamp: "00:24:16", text: "私もたーんと遊んであげることにしようかなー！ タルマエ、アキュートさん、よろしくね！ 絶対2人のことも風水でハッピーにしちゃうんだから！" },
  { id: "ep05_001", category: "キャラクターストーリー", episode: "第5話", timestamp: "00:24:49", text: "トレーナー、なんだか疲れてるね。顔色が悪いし、頭も重いんじゃない？ さっきから重心が前に行って、手で頭を支えてるもん。" },
  { id: "ep05_002", category: "キャラクターストーリー", episode: "第5話", timestamp: "00:25:06", text: "心当たりないって感じ？ 無意識ってことは、やっぱり住の峦頭かな。トレーナー室は問題なさそうだし、原因はきっと寮の方ね！ よし、思い立ったが吉日！ 抜き打ち風水チェック、レッツゴー！" },
  { id: "ep05_003", category: "キャラクターストーリー", episode: "第5話", timestamp: "00:25:39", text: "なるほど……。やっぱり問題あるみたい。特に寝具周りかなー。あ、もちろん不潔ってわけじゃないよ、掃除はバッチリ！ ただ風水的に見ると、もっとこうした方が運気が上がるんだけどなーっていうのがちらほらあるね。" },
  { id: "ep05_004", category: "キャラクターストーリー", episode: "第5話", timestamp: "00:25:58", text: "具体的に言うと、枕カバーをタオルで代用しているところとか。便利なのはわかるんだけど、仕事運が下がっちゃうの。カーテンとベッドカバーが両方柄物なのもあまり良くないんだよね。陽が強すぎて陰と陽のバランスが崩れちゃったりして。" },
  { id: "ep05_005", category: "キャラクターストーリー", episode: "第5話", timestamp: "00:26:17", text: "寝間着は……あれ、たぶん古い服を寝間着にしてるんだよね？ エコなんだけど、風水的にはパジャマを買った方がいいかな。他にも色々あるけど、とりあえず取り掛かろっか！" },
  { id: "ep05_006", category: "キャラクターストーリー", episode: "第5話", timestamp: "00:26:38", text: "よし、これで完成！" },
  { id: "ep05_007", category: "キャラクターストーリー", episode: "第5話", timestamp: "00:26:50", text: "わかる、わかる！ うまく言葉にできないけれど、なんだか変わった。無意識に訴えるパワー、それが風水の本領なんだよ。今日の部屋をキープし続けられたら、君も必ずリッキーラッキー！" },
  { id: "ep05_008", category: "キャラクターストーリー", episode: "第5話", timestamp: "00:27:21", text: "本当！？ 良かったー！ 実はね、この間はトレーナーの部屋の『横梁圧頂（おうりょうあっちょう）』を取り除いてたんだ。横梁圧頂っていうのは、睡眠中、無意識に心を圧迫してしまうもののことなんだけど。" },
  { id: "ep05_009", category: "キャラクターストーリー", episode: "第5話", timestamp: "00:27:36", text: "例えば柄物が多いと無意識であっても気は散るし、枕カバーもタオルより正規品の方がぐっすり眠れる。こんな感じで一つ一つ部屋にあった小さな歪みを正したら、深い眠りにつけるようになって、トレーナーの運気が上がったってわけ！" },
  { id: "ep05_010", category: "キャラクターストーリー", episode: "第5話", timestamp: "00:27:58", text: "これが幸運を運ぶ風水のパワー、つまり環境開運学なのです！ 環境が変われば考え方が変わるし、考え方が変わると性格や人格まで変わってくるもの。だから幸せになりたいのなら、まずは環境からってわけ！" },
  { id: "ep05_011", category: "キャラクターストーリー", episode: "第5話", timestamp: "00:28:18", text: "……と、うんちく語りはこの辺にしといて、今どんな気持ち？ 頭ははっきりすっきり、気力もあふれて元気100倍って感じじゃない？ ぜひこの体験を言葉にして、みんなに教えてあげたいよね？ ね、そうでしょ！ というわけで好機逸すべからず、いざ風水広報活動へレッツゴー！" },
  { id: "ep06_001", category: "キャラクターストーリー", episode: "第6話", timestamp: "00:29:01", text: "おはよう、トレーナー！ 飾ってた生け花、古くなってきてたから新しいお花買ってきたよ。それと机の上のあれは、うちのパパのグッズの開運ハンカチ！ 風水的にもいいし、素材もすごくいいからプレゼント！" },
  { id: "ep06_002", category: "キャラクターストーリー", episode: "第6話", timestamp: "00:29:18", text: "あとは窓が閉まってるから開けておくこと。換気は風水の基本だよ！ これで運気は今日も大吉だー！ それじゃ、またトレーニングでねー！" },
  { id: "ep06_003", category: "キャラクターストーリー", episode: "第6話", timestamp: "00:29:45", text: "あれ、トレーナー！ 偶然だねー！ そうだ、今時間ある？ 連れて行きたいところがあるの！" },
  { id: "ep06_004", category: "キャラクターストーリー", episode: "第6話", timestamp: "00:30:01", text: "というわけで、こちら動物園です！ お出かけって気を動かすことになるから、絶好の開運チャンスになるんだよね。そこで大事なのは吉方位に行くこと！ この動物園は君の吉方位で、いつか絶対連れて行きたいなって思ってて——" },
  { id: "ep06_005", category: "キャラクターストーリー", episode: "第6話", timestamp: "00:30:25", text: "……泣き声？ ごめんトレーナー、ちょっと行ってくる！" },
  { id: "ep06_006", category: "キャラクターストーリー", episode: "第6話", timestamp: "00:30:41", text: "君、大丈夫？ こんな端っこでどうしたの？" },
  { id: "ep06_007", category: "キャラクターストーリー", episode: "第6話", timestamp: "00:30:54", text: "そっか、ご家族とはぐれちゃったのかな。それにしてもこの辺りは峦頭が良くないね、じめじめしてる。とりあえずお姉ちゃんと迷子センターまで行きましょ！ 君をもっと素敵な場所に連れて行ってあげる！" },
  { id: "ep06_008", category: "キャラクターストーリー", episode: "第6話", timestamp: "00:31:27", text: "私は一緒にいただけだよ、見つけられて良かった！ 気をつけて帰ってね。帰り道は真ん中の大きな道を通って帰ってね。幸運の通り道になっているから、きっと無事に帰れるよ！" },
  { id: "ep06_009", category: "キャラクターストーリー", episode: "第6話", timestamp: "00:31:55", text: "オカルトってわけじゃないんだけど……うーん、でも確かによく誤解されるかも。どうして？" },
  { id: "ep06_010", category: "キャラクターストーリー", episode: "第6話", timestamp: "00:32:27", text: "あ、それはね、ここは峦頭って言って風水的に気が滞っている場所なの。少しじめっとしていて、なんとなく気分が落ち込まない？ 逢魔の曲がり角、八卦の境目にご用心ってことで、この子が少しでもラッキーな場所にいた方がと思って……。" },
  { id: "ep06_011", category: "キャラクターストーリー", episode: "第6話", timestamp: "00:33:11", text: "ご、ごめんなさい、ごめんなさい！ びっくりしちゃって、その、その……ごめんなさーい！！" },
  { id: "ep06_012", category: "キャラクターストーリー", episode: "第6話", timestamp: "00:33:27", text: "やっちゃったなー……。トレーナーのおかげで助かったよ。やっぱり風水って、子供から見るとちょっと怖いのかなぁ。女の子への説明、もう少し落ち着いてから話した方が良かったね。たまに言われるんだ、「リッキーは圧が強い」って。反省……。" },
  { id: "ep06_013", category: "キャラクターストーリー", episode: "第6話", timestamp: "00:33:56", text: "えっ？ もちろん同じ失敗はしないように努めるし、心の乱れにも対策を打つよ！" },
  { id: "ep06_014", category: "キャラクターストーリー", episode: "第6話", timestamp: "00:34:17", text: "あっ……そうかも。その、昔ね、パパにも言われたことあるんだ。「風水で解決しようって思いすぎる、自分の気持ち、特に弱い気持ちに向き合わない癖がある」って。風水は無意識に働きかけるものだから、蓋をするのは良くないって気をつけてはいたんだけど……またやっちゃってるのかなぁ。" },
  { id: "ep06_015", category: "キャラクターストーリー", episode: "第6話", timestamp: "00:34:57", text: "どうしよう、風水以外で解決って、どうすればいいんだっけー！？" },
  { id: "ep06_016", category: "キャラクターストーリー", episode: "第6話", timestamp: "00:35:10", text: "えっ、気持ち……？ えっと、さっき女の子に悲鳴をあげられて、胸が苦しくて、頭がぼんやりしてて……。" },
  { id: "ep06_017", category: "キャラクターストーリー", episode: "第6話", timestamp: "00:35:27", text: "悲しかったのは、そうかも。でも誤解されるのはよくあるんだ。だからそれはそんなにショックじゃなかったの。ただ……ただね、私、もっとうまくできたのにって。そう、そうなの！ 私いつもは叫ばせたりしない、ラッキーになれるように上手に話せるのにって……そう思ってた、そう思ってたんだ……。" },
  { id: "ep06_018", category: "キャラクターストーリー", episode: "第6話", timestamp: "00:36:13", text: "うん、もう大丈夫！ 疲れが取れた感じがする。やっぱり蓋しちゃってたんだね。助かっちゃった、ありがとうトレーナー！" },
  { id: "ep07_001", category: "キャラクターストーリー", episode: "第7話", timestamp: "00:36:37", text: "トレーニング完了！ わっ、こんな時間！ 急いで行かなきゃ！ 忘れ物はなし。それじゃあトレーナー、夏祭り実行委員の会議、行ってくるね！" },
  { id: "ep07_002", category: "キャラクターストーリー", episode: "第7話", timestamp: "00:36:55", text: "地域の夏祭り実行委員長が私のファンの方みたいでね、夏祭りを風水的な側面でアドバイスしてほしいってお話が来たの。具体的に言うと、週に何日か会議に参加したりして風水のアドバイスを送るというところなんだけど、「先生の知識でお祭りをラッキーで満たしてください！」ってすっごく熱心に言われちゃって！" },
  { id: "ep07_003", category: "キャラクターストーリー", episode: "第7話", timestamp: "00:37:23", text: "トレーナーさえ良ければこのお話受けたいんだけど、どう？ いい？ いいかな？ いいよね、ね、ね！" },
  { id: "ep07_004", category: "キャラクターストーリー", episode: "第7話", timestamp: "00:37:39", text: "やったー！ ありがとう、トレーナー！" },
  { id: "ep07_005", category: "キャラクターストーリー", episode: "第7話", timestamp: "00:37:57", text: "おはよう、トレーナー……。" },
  { id: "ep07_006", category: "キャラクターストーリー", episode: "第7話", timestamp: "00:38:02", text: "うーん、少しね、次の会議に持って行きたい資料があったから準備してたの。気づいたら夜明けで、タルマエに怒られちゃった。寝不足は運気の低下を招くから普段は気をつけているんだけど、夢中になりすぎちゃってたみたい。" },
  { id: "ep07_007", category: "キャラクターストーリー", episode: "第7話", timestamp: "00:38:22", text: "あー、それがね、実は今日は臨時会議を開こうと思ってて。ほら、私って結構ガツガツ前出てくタイプでしょ？ 気づいたら風水アドバイザーから『実行委員長その2』みたいになってて、あれもこれもって手を広げていったら、いつの間にか準備することがたくさんできちゃってたの。" },
  { id: "ep07_008", category: "キャラクターストーリー", episode: "第7話", timestamp: "00:38:48", text: "でもね、心配しないで！ トレーニングはちゃんとこなすし、ウマ娘だもん、ちょっとやそっとじゃ倒れたりしないよ！ それにね、本当に忙しいけど楽しいの！ 夏祭りでみんなが笑顔でいるところを考えると、力が湧いてくるんだー！" },
  { id: "ep07_009", category: "キャラクターストーリー", episode: "第7話", timestamp: "00:39:08", text: "そうそう、昨日ね、新しい法被（はっぴ）のデザインが決定したんだよ！ 私の風水アドバイスも活かしてくれて、すっごく素敵なんだ！ 他にもお神輿に開運カラーをあしらったり、開運グッズを飾ったり、特設ステージも凝ってて、とにかく普通のお祭りとは一味違うの！" },
  { id: "ep07_010", category: "キャラクターストーリー", episode: "第7話", timestamp: "00:39:43", text: "えっ、朝ごはん？ 私にって……あさりの味噌汁とほうれん草のおひたしに、ツヤツヤ白米！ お味噌汁は最高の開運食、あさりは直感力を生むし、緑の葉野菜は健康食、白米は金運アップ！ ……それ、知ってたの！？" },
  { id: "ep07_011", category: "キャラクターストーリー", episode: "第7話", timestamp: "00:40:13", text: "走り込み終わり！ トレーナー、次は何のトレーニング？ ……えっ、いつもより少しだけ少ないような気がするけど……そう？ まあいっか！" },
  { id: "ep07_012", category: "キャラクターストーリー", episode: "第7話", timestamp: "00:40:33", text: "ふぅ、今日の会議も終わり！ けど、もうひと踏ん張りね。帰ったら各テントに飾るグッズをもう一度洗い出さなくっちゃ……って、あれ？ トレーナー！？ 車なんか運転してどうしたの？ もしかしてお迎え！？" },
  { id: "ep07_013", category: "キャラクターストーリー", episode: "第7話", timestamp: "00:40:54", text: "本当に！？ うん、そっか……それじゃあ、甘えちゃおうかな！" },
  { id: "ep07_014", category: "キャラクターストーリー", episode: "第7話", timestamp: "00:41:17", text: "この賑わい、みんなの笑顔、まさに大成功じゃない！？ ラッキーアイテムもたっぷり置けたし、峦頭も理気も隙はなし！ 頑張ってよかったー！" },
  { id: "ep07_015", category: "キャラクターストーリー", episode: "第7話", timestamp: "00:41:39", text: "でもね、その言葉、私からも君に言いたいな。" },
  { id: "ep07_016", category: "キャラクターストーリー", episode: "第7話", timestamp: "00:41:48", text: "ちょっと、もう！ まだとぼける気？ 私が限界を超えないよう見守ってくれてたでしょ？ ご飯の用意も、トレーニングの調整も、送迎も、わかってたよ。トレーナーだって忙しいのに、本当にありがとう！" },
  { id: "ep07_017", category: "キャラクターストーリー", episode: "第7話", timestamp: "00:42:06", text: "それにね、一番ありがとうって言いたいのはね、後ろでずーっと見守っててくれたこと。君が静かに見守ってくれてるだけで、それだけでね、安心したの。もし心も体も限界を超えそうになったら、きっと止めてくれる。万が一倒れても、君が抱きとめてくれる。だから大丈夫って。" },
  { id: "ep07_018", category: "キャラクターストーリー", episode: "第7話", timestamp: "00:42:35", text: "気づいてないかもしれないけど、私も最近気づいたんだけど……君って、私のお守りなんだよ。君がいるだけで私はラッキー！ 私の人生は、きっともっともっと素敵になる！ だから、だからね、これからも私のそばにいてね。私のこと、支えてね！" }
];

// 育成ストーリー
const trainingStoryData = [
  { id: "tr_001", category: "育成ストーリー", episode: "前編", timestamp: "00:00:00", text: "ねっ、すごいでしょ！？ だから私と風水始めてみない？ ね？ ね？" }
];

const quotesData = [...characterStoryData, ...trainingStoryData];

// --- 検索・もっと見る機能用の変数 ---
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');
const resultCount = document.getElementById('resultCount');
const catButtons = document.querySelectorAll('.cat-btn');

// もっと見るボタン関連の要素
const loadMoreContainer = document.getElementById('loadMoreContainer');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const remainingCountSpan = document.getElementById('remainingCount');

const INITIAL_DISPLAY_COUNT = 5; // 初回・リセット時に表示する件数
const LOAD_MORE_COUNT = 10;      // ボタンを押した時に追加で表示する件数
let currentDisplayLimit = INITIAL_DISPLAY_COUNT;
let currentFilteredData = [];
let selectedCategory = 'all';
// --------------------------------

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 検索・フィルタリング処理と描画
// resetLimit が true の場合、表示上限を初期値(5件)に戻す
function renderResults(resetLimit = false) {
  if (resetLimit) {
    currentDisplayLimit = INITIAL_DISPLAY_COUNT;
  }

  const query = searchInput.value.trim();

  // 条件に合うデータをすべて抽出
  currentFilteredData = quotesData.filter(item => {
    const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchQuery = !query ||
      item.text.toLowerCase().includes(query.toLowerCase()) ||
      item.episode.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  resultCount.textContent = `${currentFilteredData.length} 件`;

  // 該当なしの場合
  if (currentFilteredData.length === 0) {
    resultsContainer.innerHTML = `
      <div class="md-card p-8 text-center text-slate-400 text-sm">
        該当するセリフが見つかりません
      </div>
    `;
    loadMoreContainer.classList.add('hidden'); // ボタンを隠す
    return;
  }

  // 表示上限までのデータを切り出してHTMLを生成
  const dataToDisplay = currentFilteredData.slice(0, currentDisplayLimit);

  resultsContainer.innerHTML = dataToDisplay.map(item => {
    let displayText = item.text;
    if (query) {
      const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
      displayText = displayText.replace(regex, '<mark class="highlight">$1</mark>');
    }

    const badgeClass = item.category === '育成ストーリー' ? 'badge-training' : 'badge-chara';
    const borderClass = item.category === '育成ストーリー' ? 'border-red-300' : 'border-amber-300';

    return `
      <div class="md-card p-4 border-l-4 ${borderClass}">
        <div class="flex flex-wrap items-center gap-2 mb-1.5">
          <span class="${badgeClass} text-xs font-bold px-2.5 py-0.5 rounded-md">
            ${item.category}｜${item.episode}
          </span>
          <span class="text-xs text-slate-400 font-mono">${item.timestamp}</span>
        </div>
        <p class="text-slate-800 text-sm sm:text-base leading-relaxed">${displayText}</p>
      </div>
    `;
  }).join('');

  // 「もっと見る」ボタンの表示制御
  const remainingCount = currentFilteredData.length - currentDisplayLimit;
  if (remainingCount > 0) {
    loadMoreContainer.classList.remove('hidden');
    remainingCountSpan.textContent = remainingCount;
  } else {
    loadMoreContainer.classList.add('hidden');
  }
}

// イベントリスナーの登録
if (catButtons.length > 0) {
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedCategory = btn.getAttribute('data-cat');
      catButtons.forEach(b => {
        b.className = 'cat-btn px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-600 hover:bg-amber-100 transition';
      });
      btn.className = 'cat-btn px-3.5 py-1.5 rounded-lg text-xs font-bold bg-amber-400 text-amber-950 transition';
      renderResults(true); // タブ切り替え時にリセット
    });
  });
}

if (searchInput) {
  searchInput.addEventListener('input', () => renderResults(true)); // 入力時にリセット
}

if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    currentDisplayLimit += LOAD_MORE_COUNT;
    renderResults(false); // ボタンを押したときはリセットせず追記
  });
}

// 初期描画
renderResults(true);


// ==========================================
// 2. コパノリッキー産駒 出走情報読み込み機能
// ==========================================

// GASのWebアプリURL（スプレッドシート経由の場合）またはJSONファイルのパス
const DATA_URL = "ここにGASのウェブアプリURL、または rickey_entries.json のURL";

// カード描画用関数
function renderEntryCards(data) {
  const container = document.getElementById("rickey-race-list");
  if (!container) return;
  container.innerHTML = "";

  if (!data.entries || data.entries.length === 0) {
    container.innerHTML = "<p>今週の中央競馬での出走予定はありません。</p>";
    return;
  }

  data.entries.forEach(item => {
    const badgeColor = item.day_type === "土曜" ? "#1d4ed8" : "#dc2626";
    const umabanText = item.umaban ? `${item.umaban}番 ` : "";

    const cardHtml = `
      <a href="${item.detail_url}" target="_blank" rel="noopener" style="text-decoration: none; color: inherit; display: block; margin-bottom: 12px;">
        <div style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 12px 16px; background: #f9fafb; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
              <span style="background: ${badgeColor}; color: #fff; font-size: 12px; font-weight: bold; padding: 2px 8px; border-radius: 6px;">
                ${item.day_type}
              </span>
              <span style="font-size: 13px; color: #4b5563;">
                ${item.course} ${item.race_num} ${item.condition}（${item.race_name}）
              </span>
            </div>
            <div style="font-size: 15px; font-weight: bold; color: #111827;">
              ${umabanText}${item.horse_name}
            </div>
          </div>
        </div>
      </a>
    `;
    container.insertAdjacentHTML("beforeend", cardHtml);
  });

  const updatedTimeEl = document.getElementById("rickey-updated-time");
  if (updatedTimeEl) {
    updatedTimeEl.textContent = `最終更新: ${data.updated_at}`;
  }
}

async function loadRickeyEntries() {
  try {
    if (!DATA_URL.startsWith("http") && !DATA_URL.endsWith(".json")) {
      renderEntryCards({
        updated_at: "金曜日 18:00（プレビュー表示）",
        entries: [
          {
            day_type: "土曜",
            course: "東京",
            race_num: "10R",
            condition: "ダ1600m",
            race_name: "3歳以上2勝クラス",
            umaban: "7",
            horse_name: "出走馬・産駒情報サンプル 1",
            detail_url: "https://db.netkeiba.com/horse/sire/2010101249/"
          },
          {
            day_type: "日曜",
            course: "京都",
            race_num: "11R",
            condition: "ダ1800m",
            race_name: "オープン",
            umaban: "12",
            horse_name: "出走馬・産駒情報サンプル 2",
            detail_url: "https://db.netkeiba.com/horse/sire/2010101249/"
          }
        ]
      });
      return;
    }

    const res = await fetch(DATA_URL);
    const data = await res.json();
    renderEntryCards(data);
  } catch (err) {
    console.error("出走情報の読み込みに失敗しました:", err);
  }
}

// ページ読み込み時に実行
loadRickeyEntries();
