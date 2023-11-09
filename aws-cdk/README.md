# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template

## 参考サイト

[AWS CDK で定義したリソースをローカル環境で実行してみた](https://dev.classmethod.jp/articles/cdk-local-develop/)

⇒ このままでは使えないので書き換えは必要

SAM インストール

[Installing or updating the latest version of the AWS CLI](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/getting-started-install.html)

### Docker 起動

```sh
service docker start
```

### Docker ネットワーク追加

```sh
docker network create sam-cli
```

### dynamoDB へテストデータ追加

```sh
export AWS_SECRET_ACCESS_KEY=local
export AWS_ACCESS_KEY_ID=local
export AWS_DEFAULT_REGION=local

aws dynamodb create-table --endpoint-url http://localhost:8000 --cli-input-json file://dynamodb/samples.json
aws dynamodb batch-write-item --endpoint-url http://localhost:8000 --request-items file://dynamodb/samples_data.json
```

[DynamoDB Local の導入](https://qiita.com/gzock/items/e0225fd71917c234acce)
