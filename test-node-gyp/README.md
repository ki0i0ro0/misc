# test-node-gyp

## ビルドファイルの生成

`node-gyp configure`

## ビルドの実行

`node-gyp build`

## ビルドディレクトリの削除

`node-gyp clean`

## リビルド

`node-gyp rebuild`

## つまりポイント

[Python のパスを通す必要がある](https://teratail.com/questions/319845)

```sh
which python3

npm config -g set python /xxx/python3
```

## 参考サイト

- https://qiita.com/taizo/items/dee4ee85fe6f4e28428b =>成功しない
- https://qiita.com/Renorari/items/d88a0c73c301dfa68ac8
- https://github.com/nodejs/node-gyp#installation
- https://qiita.com/MOKYN/items/2cc81d2c9a42ff99fade =>成功した
