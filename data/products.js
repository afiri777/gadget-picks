// ============================================================
//  商品データ管理ファイル  products.js
//  商品の追加・更新・リンク差し替えはここだけ編集する
//  HTMLは自動でここから読み込んでレンダリングする
// ============================================================

const PRODUCTS = [

  // ----------------------------------------------------------
  // ページ: gadget（ガジェット・充電グッズ）
  // ----------------------------------------------------------

  {
    id:          "anker-maggo-10000",
    name:        "Anker MagGo Power Bank 10000mAh 35W",
    brand:       "Anker",
    category:    "モバイルバッテリー",
    icon:        "🔋",
    featured:    true,                   // イチ推しバッジを表示するか
    badge:       "イチ推し",
    copy:        "ケーブル内蔵・Apple Watch充電・MagSafe対応の全部入り",
    description: "ケーブルを別に持ち歩く必要がなく、Apple WatchもiPhoneも一台で充電できる。10000mAhで容量も十分。LEDディスプレイで残量が数字で確認できるのも地味に便利。",
    fit_good:    "iPhone＋Apple Watch使い・ケーブルを忘れがち・1個で完結させたい",
    fit_bad:     "Android中心・MagSafe不要・とにかく安く抑えたい",
    note:        "MagSafe対応なのでiPhone背面に貼り付けながら充電できる。USB-Cケーブルが本体内蔵なので手ぶらで出かけても安心。",
    price:       "¥8,000〜",
    asp:         "amazon",               // "amazon" or "yahoo"
    link:        "https://amzn.to/3PUltwW",
    page:        "gadget",
    priority:    1,                      // 数字が小さいほど上に表示
    status:      "active"               // "active" / "hold" / "retired"
  },

  {
    id:          "anker-charger-100w",
    name:        "Anker Charger 100W 3ポート",
    brand:       "Anker",
    category:    "充電器",
    icon:        "🔌",
    featured:    false,
    badge:       "",
    copy:        "PC・スマホ・タブレット、充電器これ1個で終わる",
    description: "3ポートで最大100W出力。MacBookを充電しながらiPhoneとiPadを同時に刺せる。充電器が1個に集約できると、デスクの電源タップが一気にスッキリする。USB-Cケーブル同梱・折りたたみプラグで持ち運びも楽。",
    fit_good:    "デバイスが多い・MacBook使い・充電器の数を減らしたい",
    fit_bad:     "スマホ1台だけ充電・USB-Aしか使わない",
    note:        "",
    price:       "¥5,000〜",
    asp:         "amazon",
    link:        "https://amzn.to/4smQlnn",
    page:        "gadget",
    priority:    2,
    status:      "active"
  },

  {
    id:          "laptop-stand",
    name:        "ノートPCスタンド（スマホスタンド付き）",
    brand:       "",
    category:    "デスク環境",
    icon:        "💻",
    featured:    false,
    badge:       "",
    copy:        "首・肩が痛い人、だいたいここが原因",
    description: "PCを目線の高さに上げるだけで姿勢が変わる。テレワーク中に首や肩が痛くなる人は、画面が低すぎることが多い。アルミ製で安定感があり、高さ・角度が無段階で調整できる。スマホスタンド付きで横に立てられるのも地味に便利。",
    fit_good:    "長時間PC作業・首肩がこる・テレワーク環境を整えたい",
    fit_bad:     "外出先メインで使う・デスクが狭い",
    note:        "",
    price:       "¥3,000〜",
    asp:         "amazon",
    link:        "https://amzn.to/4vkp9IL",
    page:        "gadget",
    priority:    3,
    status:      "active"
  },

  {
    id:          "ugreen-revodok-pro",
    name:        "UGREEN Revodok Pro 7-in-1 ドッキングステーション",
    brand:       "UGREEN",
    category:    "USBハブ / ドック",
    icon:        "🖥️",
    featured:    false,
    badge:       "",
    copy:        "MacBookのポート1口を、全部使えるデスクに変える",
    description: "HDMI×2・USB-A×2・USB-C 10Gbps・100W PD充電に対応。外部モニター2台同時接続もできる。MacBook Air/Proのポート不足を一発で解決できる。4K@60Hz出力対応なので映像もきれい。",
    fit_good:    "MacBook/iPad Pro使い・外部モニターに繋ぎたい・4K出力が必要",
    fit_bad:     "ポートが足りているWindowsユーザー・デスクトップPC使い",
    note:        "HDMI×2なので外部モニター2台を同時接続できる。デュアルモニター環境を作りたい人にも向いている。",
    price:       "¥8,000〜",
    asp:         "amazon",
    link:        "https://amzn.to/3Qn8rYU",
    page:        "gadget",
    priority:    4,
    status:      "active"
  },

  {
    id:          "benq-screenbar-halo",
    name:        "BenQ ScreenBar Halo",
    brand:       "BenQ",
    category:    "デスクライト",
    icon:        "💡",
    featured:    false,
    badge:       "",
    copy:        "乗せるだけで、デスクの雰囲気が別格になる",
    description: "モニター上部に乗せるだけで設置完了。前面照明と背面の間接照明が同時に点くので、目への負担が減りつつデスクの見た目が一気に変わる。自動調光・無線リモコン付きで操作も楽。USB給電なので電源管理も簡単。",
    fit_good:    "夜の作業が多い・目が疲れる・デスクの見た目にこだわりたい",
    fit_bad:     "ライトに1万円以上かけたくない・モニターを使っていない",
    note:        "",
    price:       "¥20,000〜",
    asp:         "amazon",
    link:        "https://amzn.to/4c6Ma8X",
    page:        "gadget",
    priority:    5,
    status:      "active"
  },

  {
    id:          "anker-cable-holder",
    name:        "Anker Magnetic Cable Holder",
    brand:       "Anker",
    category:    "ケーブル管理",
    icon:        "🧲",
    featured:    false,
    badge:       "",
    copy:        "「ケーブルどこ行った？」を完全になくす",
    description: "マグネットでケーブルをデスクに固定しておける。Lightning・USB-C・Micro USBに対応。使わないときも垂れ下がらず、必要なときはサッと引き抜けるだけ。地味だけど毎日使うものが変わる。",
    fit_good:    "ケーブルを毎日抜き差しする・デスクがごちゃつきがち",
    fit_bad:     "ケーブルを常時刺しっぱなし・本数が1〜2本しかない",
    note:        "",
    price:       "¥2,000〜",
    asp:         "amazon",
    link:        "https://amzn.to/4cbVOHG",
    page:        "gadget",
    priority:    6,
    status:      "active"
  },

  {
    id:          "anker-liberty4-nc",
    name:        "Anker Soundcore Liberty 4 NC",
    brand:       "Anker",
    category:    "ワイヤレスイヤホン",
    icon:        "🎧",
    featured:    false,
    badge:       "",
    copy:        "ノイキャン・ハイレゾ・50時間、1万円以下でここまで揃う",
    description: "ウルトラノイズキャンセリング3.0搭載で、カフェや移動中の騒音をしっかりカット。最大50時間再生・マルチポイント接続・IPX4防水・ワイヤレス充電対応と、必要な機能がほぼ全部揃っている。3万円台のイヤホンと比べても遜色ない完成度。",
    fit_good:    "ノイキャン重視・長時間使用・コスパで妥協したくない",
    fit_bad:     "最高音質にこだわるオーディオファン・ハイエンド一択の人",
    note:        "スマホとPC両方に同時接続できるマルチポイント接続対応。ワイヤレス充電にも対応している。",
    price:       "¥8,000〜",
    asp:         "amazon",
    link:        "https://amzn.to/4e4meNW",
    page:        "gadget",
    priority:    7,
    status:      "active"
  }

  // ----------------------------------------------------------
  // 今後ここに追加していく
  // 新カテゴリのページを作ったら page: "desk" などで追加する
  // ----------------------------------------------------------

];
