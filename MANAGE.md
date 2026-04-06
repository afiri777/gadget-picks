# アフィリエイト管理ファイル

最終更新：2026-04-06

---

## サイト構成

| ページ | URL | 状態 |
|--------|-----|------|
| トップ（カテゴリ一覧） | `/` | ✅ 公開中 |
| ガジェット・充電グッズ | `/gadget/` | ✅ 公開中 |
| デスク環境 | `/desk/` | 🔲 未着手 |
| キッチン・調理グッズ | `/kitchen/` | 🔲 未着手 |
| バッグ・収納グッズ | `/bag/` | 🔲 未着手 |

---

## 商品管理 ／ ガジェット・充電グッズ

| # | 商品名 | カテゴリ | 現在のプラットフォーム | リンク | 価格帯 | 切り替え状況 |
|---|--------|----------|----------------------|--------|--------|------------|
| 1 | Anker MagGo Power Bank 10000mAh 35W | モバイルバッテリー | Amazon | https://amzn.to/3PUltwW | ¥8,000〜 | ⏳ Yahoo登録後に切り替え |
| 2 | Anker Charger 100W 3ポート | 充電器 | Amazon | https://amzn.to/4smQlnn | ¥5,000〜 | ⏳ Yahoo登録後に切り替え |
| 3 | ノートPCスタンド（スマホスタンド付き） | デスク環境 | Amazon | https://amzn.to/4vkp9IL | ¥3,000〜 | ⏳ Yahoo登録後に切り替え |
| 4 | UGREEN Revodok Pro 7-in-1 ドッキングステーション | USBハブ | Amazon | https://amzn.to/3Qn8rYU | ¥8,000〜 | ⏳ Yahoo登録後に切り替え |
| 5 | BenQ ScreenBar Halo | デスクライト | Amazon | https://amzn.to/4c6Ma8X | ¥20,000〜 | ⏳ Yahoo登録後に切り替え |
| 6 | Anker Magnetic Cable Holder | ケーブル管理 | Amazon | https://amzn.to/4cbVOHG | ¥2,000〜 | ⏳ Yahoo登録後に切り替え |
| 7 | Anker Soundcore Liberty 4 NC | イヤホン | Amazon | https://amzn.to/4e4meNW | ¥8,000〜 | ⏳ Yahoo登録後に切り替え |

---

## Yahooリンク切り替えチェックリスト

Yahooアフィリエイト登録完了後、以下の順番で切り替える。

- [ ] ガジェットページ（/gadget/index.html）の全商品リンクをYahooに変更
- [ ] ボタン文言を「Amazonで見る」→「Yahoo!ショッピングで見る」に変更
- [ ] 免責表記をYahoo版に変更（`Amazonアソシエイト` → `Yahoo!ショッピングアフィリエイト`）
- [ ] トップページ（index.html）の免責表記も変更
- [ ] MANAGE.mdの切り替え状況を「✅ 切り替え完了」に更新
- [ ] GitHubにpushして反映確認

---

## 新カテゴリページ追加手順

1. `/gadget/index.html` をコピーして新フォルダに置く
   例：`/desk/index.html`
2. 商品カード（`product-card`ブロック）を差し替える
3. トップページ（`/index.html`）のカテゴリカードに追加
   - `coming` クラスを外す
   - `href` を実URLに変更
   - `cat-count` の点数を更新
4. MANAGE.mdのサイト構成テーブルを更新
5. GitHubにpush

---

## 商品追加候補（未掲載）

| 商品名 | カテゴリ | 追加優先度 | メモ |
|--------|----------|------------|------|
| （追加候補をここに記録） | | | |

---

## GitHubリポジトリ

- URL：https://github.com/afiri777/gadget-picks
- 公開URL：https://afiri777.github.io/gadget-picks/
- ローカルパス：/Users/yuusha/SNS収益化/yahoo-affiliate/

## pushコマンド（毎回使う）

```bash
cd /Users/yuusha/SNS収益化/yahoo-affiliate
git add -A
git commit -m "更新内容をここに書く"
git push
```
