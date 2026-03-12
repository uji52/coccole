# Coccole
## バージョン

| ツール  | バージョン |
| :------ | :--------- |
| Node.js | 16         |

```
npm install -g @vue/cli

npm install
npm run serve
npm run build
npm run lint
```

### テスト

ユニットテストには [Jest](https://jestjs.io/) を使用しています。既存の `App.vue` コンポーネントだけでなく、プロジェクト全体が
正常にビルドできるかどうかを確認するためのビルドテストも追加されています。

実行方法:

```bash
npm install          # 初回のみ
npm run test:unit    # すべてのテストを実行（ビルド検証を含む）
```

テストは `tests/unit` フォルダの `*.spec.js` ファイルを対象にします。

### Vueに関する補足

See [Configuration Reference](https://cli.vuejs.org/config/).
