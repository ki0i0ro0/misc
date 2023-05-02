# BlazorAppTest

## 前提

VS Code 開発コンテナが使えること

## 環境構築用コマンド

1. ビルド

    `dotnet build`

1. httpsを使えるようにする

   `dotnet dev-certs https`

1. マイグレーションコマンドを使えるようにする

   `dotnet tool install --global dotnet-ef`

1. マイグレーション実行

   `dotnet ef database update`

1. 起動

   `dotnet run`
