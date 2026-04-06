# アフィリエイトサイト全体管理ファイル

最終更新：2026-04-06
現在のASP：**Amazon・Yahoo混在**（商品ごとに設定）

---

## 公開URL一覧

| ページ | URL | 状態 |
|--------|-----|------|
| トップ（カテゴリ一覧） | https://afiri777.github.io/gadget-picks/ | ✅ 公開中 |
| ガジェット・充電グッズ | https://afiri777.github.io/gadget-picks/gadget/ | ✅ 公開中 |
| デスク・作業効率グッズ | https://afiri777.github.io/gadget-picks/desk/ | 🔲 未着手 |
| 生活ラクするグッズ | https://afiri777.github.io/gadget-picks/life/ | 🔲 未着手 |
| 整理・片付けグッズ | https://afiri777.github.io/gadget-picks/organize/ | 🔲 未着手 |

---

## ファイル構成

```
gadget-picks/
├── index.html              ← トップページ（カテゴリ一覧）
├── gadget/
│   └── index.html          ← ガジェットページ（products.jsから自動レンダリング）
├── desk/
│   └── index.html          ← デスクページ（未作成）
├── life/
│   └── index.html          ← 生活グッズページ（未作成）
├── organize/
│   └── index.html          ← 整理グッズページ（未作成）
├── data/
│   └── products.js         ← 全商品データの管理ファイル（ここだけ編集すれば反映）
└── MANAGE.md               ← このファイル
```

### 更新の基本ルール
- **商品の追加・変更・リンク差し替え** → `data/products.js` だけ編集
- **ページのデザイン・構成変更** → 各 `index.html` を編集
- **カテゴリ追加** → 新フォルダ作成 ＋ `index.html` のカテゴリカードを更新
- **編集後は必ずGitHubにpushして反映確認**

---

## 現在のASP運用方針

| 項目 | 現状 |
|------|------|
| 使用ASP | Amazon・Yahoo（商品ごとに設定） |
| ボタン文言 | 「Amazonで見る →」または「Yahoo!ショッピングで見る →」（自動切替） |
| 免責表記 | Amazon版（Yahoo本格運用開始後に更新予定） |

### ASP優先度の判断基準

| 条件 | 主導線 |
|------|--------|
| PayPay需要が強い・Yahoo訴求が自然な商品 | Yahoo優先 |
| Amazonの方が自然・ブランド直販感がある商品 | Amazon優先 |
| どちらでも差がない場合 | Yahoo優先（PayPay訴求できるため） |
| 両方見せたい場合 | 主導線1つ ＋ 補助導線1つまで |

### 両ASP同時掲載のルール
- 同一商品の重複表示は禁止
- `asp` ＝ 主導線（メインボタン・目立つデザイン）
- `asp_sub` ＝ 補助導線（控えめボタン・任意）
- 補助ボタンは多用しない。サイトがリンク集にならないよう整理する

### ASP切り替え手順（Yahoo導入後）
1. `data/products.js` の対象商品の `asp` を `"amazon"` → `"yahoo"` に変更
2. 同じく `link` をYahooアフィリリンクに変更
3. ボタン文言はコードが自動で「Yahoo!ショッピングで見る →」に切り替わる
4. 免責表記（各index.html下部）をYahoo版に変更
5. MANAGE.mdの状態を更新
6. GitHubにpush

---

## 掲載商品一覧（全商品）

### ガジェット・充電グッズ（page: gadget）

#### 掲載中

| # | 商品ID | 商品名 | カテゴリ | ASP | 状態 | 優先度 |
|---|--------|--------|----------|-----|------|--------|
| 1 | anker-maggo-10000 | Anker MagGo Power Bank 10000mAh 35W | モバイルバッテリー | Amazon | ✅ 掲載中 | 1 |
| 2 | anker-charger-100w | Anker Charger 100W 3ポート | 充電器 | Amazon | ✅ 掲載中 | 2 |
| 3 | laptop-stand | ノートPCスタンド（スマホスタンド付き） | デスク環境 | Amazon | ✅ 掲載中 | 3 |
| 4 | ugreen-revodok-pro | UGREEN Revodok Pro 7-in-1 | USBハブ / ドック | Amazon | ✅ 掲載中 | 4 |
| 5 | benq-screenbar-halo | BenQ ScreenBar Halo | デスクライト | Amazon | ✅ 掲載中 | 5 |
| 6 | anker-cable-holder | Anker Magnetic Cable Holder | ケーブル管理 | Amazon | ✅ 掲載中 | 6 |
| 7 | anker-liberty4-nc | Anker Soundcore Liberty 4 NC | ワイヤレスイヤホン | Amazon | ✅ 掲載中 | 7 |

#### 未掲載（hold）

| # | 商品ID | 商品名 | カテゴリ | ASP | 状態 |
|---|--------|--------|----------|-----|------|
| 8 | anker-621-magnetic-5000 | Anker 621 Magnetic Battery (MagGo) 5000mAh | モバイルバッテリー | Amazon | 🔲 未掲載 |
| 9 | syncwire-magsafe-ring | 両面マグネット MagSafe リング | スマホリング | Amazon | 🔲 未掲載 |
| 10 | sandisk-ssd-1tb | 外付けSSD 1TB | 外付けSSD | Amazon | 🔲 未掲載 |
| 11 | magtame-typec-cable-240w | 磁石自動収納 Type-Cケーブル 240W 1m | 充電ケーブル | Amazon | 🔲 未掲載 |
| 12 | anker-maggo-10000-slim-yahoo | Anker MagGo Power Bank 10000mAh Slim | モバイルバッテリー | Yahoo | 🔲 未掲載 |
| 13 | elecom-battery-9000-sodium | モバイルバッテリー ナトリウムイオン 9000mAh 45W EC-C27LBK | モバイルバッテリー | Yahoo | 🔲 未掲載 |
| 14 | anker-soundcore-p40i | Anker Soundcore P40i | ワイヤレスイヤホン | Yahoo | 🔲 未掲載 |
| 15 | anker-336-charger-67w | Anker 336 Charger 67W 3ポート B2674N11 | 充電器 | Yahoo | 🔲 未掲載 |
| 16 | eufy-smarttrack-card | Eufy Security SmartTrack Card | 紛失防止トラッカー | Yahoo | 🔲 未掲載 |
| 17 | anker-solix-c300 | Anker Solix C300 DC Portable Power Station 288Wh | ポータブル電源 | Yahoo | 🔲 未掲載 |
| 18 | belkin-qi2-2in1 | Belkin UltraCharge Qi2 25W 2-in-1 折りたたみ式マグネット充電器 | Qi2充電器 | Yahoo | 🔲 未掲載 |
| 19 | ugreen-nas-dxp2800 | UGREEN DXP2800 NASync NAS 2ベイ | NAS | Yahoo | 🔲 未掲載 |
| 20 | ugreen-nas-dh2300 | UGREEN NASync DH2300 | NAS | Yahoo | 🔲 未掲載 |
| 21 | eufy-smarttrack-link | Anker Eufy SmartTrack Link（Android用） | 紛失防止トラッカー | Yahoo | 🔲 未掲載 |
| 22 | tplink-deco-x50 | TP-Link Deco X50（1-pack）AX3000 | メッシュWi-Fi | Yahoo | 🔲 未掲載 |

---

### デスク・作業効率グッズ（page: desk）

#### 未掲載（hold）

| # | 商品ID | 商品名 | カテゴリ | ASP | 状態 |
|---|--------|--------|----------|-----|------|
| 1 | elecom-qi2-3in1-ec-ms09bk | Qi2 充電器 ワイヤレス 15W 3in1 スタンド型 EC-MS09BK | Qi2充電スタンド | Amazon | 🔲 未掲載 |
| 2 | yamazaki-desk-bar | 山崎実業 デスクバー tower | デスク収納 | Amazon | 🔲 未掲載 |
| 3 | elecom-wrist-rest | エレコム COMFY ショート リストレスト MOH-013BK | リストレスト | Amazon | 🔲 未掲載 |
| 4 | ticktimer-cube | TickTimer キューブタイマー | タイマー | Amazon | 🔲 未掲載 |
| 5 | sanwa-footrest | サンワサプライ フットレスト | フットレスト | Amazon | 🔲 未掲載 |
| 6 | logicool-mx-ergo | ロジクール MX ERGO MXTB1s トラックボールマウス | マウス | Amazon | 🔲 未掲載 |
| 7 | hachiban-desk-under-storage | 八番屋 後付け机下収納 BIG-Type | デスク収納 | Amazon | 🔲 未掲載 |
| 8 | ugreen-vertical-pc-stand | UGREEN 縦型ノートパソコンスタンド | PCスタンド | Amazon | 🔲 未掲載 |
| 9 | eayhm-monitor-stand-usb | EAYHM USBドッキング付きモニター台 | モニター台 | Amazon | 🔲 未掲載 |
| 10 | amesoba-desk-mat-wool | amesoba さらさら質感 ウール デスクマット | デスクマット | Amazon | 🔲 未掲載 |
| 11 | anker-powerconf-c200 | Anker PowerConf C200 2K コンパクトウェブカメラ | ウェブカメラ | Amazon | 🔲 未掲載 |

---

### 生活ラクするグッズ（page: life）

#### 未掲載（hold）

| # | 商品ID | 商品名 | カテゴリ | ASP | 状態 |
|---|--------|--------|----------|-----|------|
| 1 | yamazaki-dispenser-tower | 山崎実業 片手で出せるディスペンサー tower 5214 | ディスペンサー | Amazon | 🔲 未掲載 |
| 2 | umimile-auto-soap-dispenser | Umimile 自動泡ハンドソープ ディスペンサー | ディスペンサー | Amazon | 🔲 未掲載 |
| 3 | heat-sealer-typec | 家庭用 ヒートシーラー Type-C充電式 | キッチングッズ | Amazon | 🔲 未掲載 |
| 4 | yamazaki-kitchen-slide-table | 山崎実業 ツーウェイ キッチン家電下引き出し＆スライドテーブル tower | キッチン収納 | Amazon | 🔲 未掲載 |
| 5 | switchbot-switch | SwitchBot スイッチ | スマートホーム | Amazon | 🔲 未掲載 |
| 6 | switchbot-lock-ultra-set | SwitchBot スマートロック Ultra 顔認証パッドPro セット | スマートロック | Yahoo | 🔲 未掲載 |
| 7 | switchbot-smart-circulator | SwitchBot スマートサーキュレーター | スマートホーム | Yahoo | 🔲 未掲載 |
| 8 | aladdin-x2-light | Aladdin X2 Light | シーリングプロジェクター | Yahoo | 🔲 未掲載 |
| 9 | switchbot-fingerprint-pad | SwitchBot 指紋認証パッド | スマートロック | Yahoo | 🔲 未掲載 |
| 10 | switchbot-lock-lite-set | SwitchBot スマートロック Lite 指紋認証パッド セット | スマートロック | Yahoo | 🔲 未掲載 |
| 11 | eufy-robot-vacuum-c10 | Anker Eufy Robot Vacuum Auto-Empty C10 | ロボット掃除機 | Yahoo | 🔲 未掲載 |
| 12 | ecovacs-deebot-t80-omni | ECOVACS DEEBOT T80 OMNI | ロボット掃除機 | Yahoo | 🔲 未掲載 |
| 13 | switchbot-hub-mini-matter | SwitchBot スマートリモコン Hub Mini（Matter対応） | スマートリモコン | Yahoo | 🔲 未掲載 |

---

### 整理・片付けグッズ（page: organize）

#### 未掲載（hold）

| # | 商品ID | 商品名 | カテゴリ | ASP | 状態 |
|---|--------|--------|----------|-----|------|
| 1 | yamazaki-bag-stocker-tower | 山崎実業 ツーウェイ レジ袋ストッカー tower 5437 | 収納グッズ | Amazon | 🔲 未掲載 |
| 2 | yamazaki-tissue-hook-tower | 山崎実業 フィルムフック ティッシュケース tower 5587 | 収納グッズ | Amazon | 🔲 未掲載 |
| 3 | yamazaki-wagon-box-s | 山崎実業 ワゴン用追加ボックス S tower | 収納グッズ | Amazon | 🔲 未掲載 |
| 4 | yamazaki-magnet-sponge-holder | 山崎実業 マグネット スポンジ＆ボトルホルダー tower | 収納グッズ | Amazon | 🔲 未掲載 |
| 5 | yamazaki-magnet-bottle-tray-plate | 山崎実業 マグネット ボトルホルダー＆トレー Plate | 収納グッズ | Amazon | 🔲 未掲載 |
| 6 | drawer-divider-8set | 引き出し仕切り収納ケース 8個セット | 収納グッズ | Amazon | 🔲 未掲載 |
| 7 | vilau-bag-in-bag | VILAU バッグインバッグ 底板付き トートバッグ インナーバッグ | 収納グッズ | Amazon | 🔲 未掲載 |

---

## アフィリリンク一覧

### Amazonリンク

| 商品ID | リンク |
|--------|--------|
| anker-maggo-10000 | https://amzn.to/3PUltwW |
| anker-charger-100w | https://amzn.to/4smQlnn |
| laptop-stand | https://amzn.to/4vkp9IL |
| ugreen-revodok-pro | https://amzn.to/3Qn8rYU |
| benq-screenbar-halo | https://amzn.to/4c6Ma8X |
| anker-cable-holder | https://amzn.to/4cbVOHG |
| anker-liberty4-nc | https://amzn.to/4e4meNW |
| anker-621-magnetic-5000 | https://amzn.to/4bUdBUU |
| syncwire-magsafe-ring | https://amzn.to/4sOPiO5 |
| sandisk-ssd-1tb | https://amzn.to/4c7ErHI |
| magtame-typec-cable-240w | https://amzn.to/47Ljam2 |
| elecom-qi2-3in1-ec-ms09bk | https://amzn.to/4c9X26j |
| yamazaki-desk-bar | https://amzn.to/3Oozxyi |
| elecom-wrist-rest | https://amzn.to/4sVYiRJ |
| ticktimer-cube | https://amzn.to/3OkIHMk |
| sanwa-footrest | https://amzn.to/4bTbWyT |
| logicool-mx-ergo | https://amzn.to/4e2GUpw |
| hachiban-desk-under-storage | https://amzn.to/4sgXJ3K |
| ugreen-vertical-pc-stand | https://amzn.to/4sOuTZq |
| eayhm-monitor-stand-usb | https://amzn.to/4vc0hm7 |
| amesoba-desk-mat-wool | https://amzn.to/3NXgeMt |
| anker-powerconf-c200 | https://amzn.to/3NP94dc |
| yamazaki-dispenser-tower | https://amzn.to/48jJfZB |
| umimile-auto-soap-dispenser | https://amzn.to/4sgWD88 |
| heat-sealer-typec | https://amzn.to/4tPnXvt |
| yamazaki-kitchen-slide-table | https://amzn.to/4c468RN |
| switchbot-switch | https://amzn.to/4mcFKd2 |
| yamazaki-bag-stocker-tower | https://amzn.to/4bUjgKG |
| yamazaki-tissue-hook-tower | https://amzn.to/4mdo0hX |
| yamazaki-wagon-box-s | https://amzn.to/4vhQzio |
| yamazaki-magnet-sponge-holder | https://amzn.to/47DZiRS |
| yamazaki-magnet-bottle-tray-plate | https://amzn.to/4bSr1AJ |
| drawer-divider-8set | https://amzn.to/4tuU0jY |
| vilau-bag-in-bag | https://amzn.to/4ttaRDN |

### Yahooリンク

| 商品ID | リンク |
|--------|--------|
| anker-maggo-10000-slim-yahoo | https://yahoo.jp/VtkpVz |
| elecom-battery-9000-sodium | https://yahoo.jp/ZaBdXp |
| anker-soundcore-p40i | https://yahoo.jp/tLeoiW |
| anker-336-charger-67w | https://yahoo.jp/KWV_JX |
| eufy-smarttrack-card | https://yahoo.jp/RDHyE9 |
| anker-solix-c300 | https://yahoo.jp/PvtNMc |
| belkin-qi2-2in1 | https://yahoo.jp/LdWRLe |
| ugreen-nas-dxp2800 | https://yahoo.jp/oA-4n3 |
| ugreen-nas-dh2300 | https://yahoo.jp/wsRqj9 |
| eufy-smarttrack-link | https://yahoo.jp/Fj29Ry |
| tplink-deco-x50 | https://yahoo.jp/47xTDi |
| switchbot-lock-ultra-set | https://yahoo.jp/v-zqSR |
| switchbot-smart-circulator | https://yahoo.jp/L5Kvan |
| aladdin-x2-light | https://yahoo.jp/mgeHNx |
| switchbot-fingerprint-pad | https://yahoo.jp/V66RZv |
| switchbot-lock-lite-set | https://yahoo.jp/U7anpe |
| eufy-robot-vacuum-c10 | https://yahoo.jp/h6EvjU6 |
| ecovacs-deebot-t80-omni | https://yahoo.jp/ZjvdpZ |
| switchbot-hub-mini-matter | https://yahoo.jp/F8cdpTw |

---

## 商品追加候補

| 商品名 | カテゴリ | 追加優先度 | メモ |
|--------|----------|------------|------|
| （追加候補をここに記録） | | | |

---

## 新カテゴリページ追加手順

1. `/gadget/index.html` をコピーして新フォルダに置く（例：`/desk/index.html`）
2. ページ内のカテゴリ関連テキストを書き換え（タイトル・タグ・用途別など）
3. `data/products.js` に新商品を追加（`page: "desk"` などに設定）
4. トップページ（`index.html`）のカテゴリカードを更新
   - `coming` クラスを削除
   - `href` を実URLに変更
   - `cat-count` の点数を更新
5. このMANAGE.mdのURL一覧・商品一覧を更新
6. GitHubにpush

---

## GitHubリポジトリ情報

| 項目 | 内容 |
|------|------|
| リポジトリ | https://github.com/afiri777/gadget-picks |
| 公開URL | https://afiri777.github.io/gadget-picks/ |
| ローカルパス | /Users/yuusha/SNS収益化/yahoo-affiliate/ |

## 毎回使うpushコマンド

```bash
cd /Users/yuusha/SNS収益化/yahoo-affiliate
git add -A
git commit -m "更新内容をここに書く"
git push
```
