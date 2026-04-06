# アフィリエイトサイト全体管理ファイル

最終更新：2026-04-06
現在のASP：**Amazon専用**（Yahoo登録後に切り替え予定）

---

## 公開URL一覧

| ページ | URL | 状態 |
|--------|-----|------|
| トップ（カテゴリ一覧） | https://afiri777.github.io/gadget-picks/ | ✅ 公開中 |
| ガジェット・充電グッズ | https://afiri777.github.io/gadget-picks/gadget/ | ✅ 公開中 |
| デスク環境 | https://afiri777.github.io/gadget-picks/desk/ | 🔲 未着手 |
| キッチン・調理グッズ | https://afiri777.github.io/gadget-picks/kitchen/ | 🔲 未着手 |
| バッグ・収納グッズ | https://afiri777.github.io/gadget-picks/bag/ | 🔲 未着手 |

---

## ファイル構成

```
gadget-picks/
├── index.html              ← トップページ（カテゴリ一覧）
├── gadget/
│   └── index.html          ← ガジェットページ（products.jsから自動レンダリング）
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
| 使用ASP | Amazon アソシエイトのみ |
| ボタン文言 | 「Amazonで見る →」 |
| 免責表記 | Amazon版 |
| Yahoo表記 | 非表示（内部管理のみ） |

### Yahoo導入後の切り替え手順
1. `data/products.js` の対象商品の `asp` を `"amazon"` → `"yahoo"` に変更
2. 同じく `link` をYahooアフィリリンクに変更
3. ボタン文言はコードが自動で「Yahoo!ショッピングで見る →」に切り替わる
4. 免責表記（各index.html下部）をYahoo版に変更
5. MANAGE.mdの状態を更新
6. GitHubにpush

---

## 掲載商品一覧（全商品）

### ガジェット・充電グッズ（page: gadget）

| # | 商品ID | 商品名 | カテゴリ | ASP | 状態 | 優先度 |
|---|--------|--------|----------|-----|------|--------|
| 1 | anker-maggo-10000 | Anker MagGo Power Bank 10000mAh 35W | モバイルバッテリー | Amazon | ✅ 掲載中 | 1 |
| 2 | anker-charger-100w | Anker Charger 100W 3ポート | 充電器 | Amazon | ✅ 掲載中 | 2 |
| 3 | laptop-stand | ノートPCスタンド（スマホスタンド付き） | デスク環境 | Amazon | ✅ 掲載中 | 3 |
| 4 | ugreen-revodok-pro | UGREEN Revodok Pro 7-in-1 | USBハブ / ドック | Amazon | ✅ 掲載中 | 4 |
| 5 | benq-screenbar-halo | BenQ ScreenBar Halo | デスクライト | Amazon | ✅ 掲載中 | 5 |
| 6 | anker-cable-holder | Anker Magnetic Cable Holder | ケーブル管理 | Amazon | ✅ 掲載中 | 6 |
| 7 | anker-liberty4-nc | Anker Soundcore Liberty 4 NC | ワイヤレスイヤホン | Amazon | ✅ 掲載中 | 7 |

---

## Amazonアフィリリンク一覧

| 商品ID | リンク |
|--------|--------|
| anker-maggo-10000 | https://amzn.to/3PUltwW |
| anker-charger-100w | https://amzn.to/4smQlnn |
| laptop-stand | https://amzn.to/4vkp9IL |
| ugreen-revodok-pro | https://amzn.to/3Qn8rYU |
| benq-screenbar-halo | https://amzn.to/4c6Ma8X |
| anker-cable-holder | https://amzn.to/4cbVOHG |
| anker-liberty4-nc | https://amzn.to/4e4meNW |

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
