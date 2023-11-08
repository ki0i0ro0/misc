# prisma-migration

## システム稼働中マイグレーションのテスト方法

```sh
# Docker上でPostgreSQLを起動
docker-compose up -d

# インストール
npm install

# テーブル作成
npm run sync-db:dev

# デモデータ作成
npm run seed

# schema.prisma内のコメントを外して保存

# マイグレーションファイルを作成
npm run create

# 起動
npm start

# マイグレーションをデプロイ(起動中に別コンソールから実行)
npm run deploy
```

## appendix

```sh
# DBの中身を確認するコマンド(別コンソール)
npm run studio
```
