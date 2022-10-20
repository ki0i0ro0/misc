# test-mermaid

[VScode で OpenAPI を書くために便利なプラグイン一覧](https://zenn.dev/s_t_pool/articles/954dfe51b950c18d08e9)

## 使うメリット

どんな人が、どんな時に Mermaid を使うといいのか、Qiita で Mermaid を使うメリットをあげてみます。

1. テキストだけでなく、ダイアグラムも表現できるようになる
1. 見た目を凝って調整せずに、はじめから整ったきれいなダイアグラムが作れる
1. ダイアグラムの修正も簡単で、記事の編集履歴から差分も残すことができる
1. 別のダイアグラムをベースに、新たなダイアグラムを簡単に作ることができる

## ダイアグラム

```mermaid
graph TB
  Start([Start])-->B{if a > b}
  B-->|True| End
  B-->|False| IFS[/while\]
  IFS-->C[a++]
  C-->IFB[\  /]
  IFB-->End([End])
```

## シーケンス図

```mermaid
sequenceDiagram
  actor U as User
  participant S as Server
  participant DB
  U->>+S: Request
  S->>DB: SQL
  DB-->>S: データ
  S-->>-U: HTML
  U->>+S: Request
  S-->>-U: JavaScript / CSS
```

## 状態遷移図

```mermaid
stateDiagram-v2
  [*] --> 実行可能状態
  実行可能状態 --> 実行状態: ディスパッチ
  実行状態 --> 実行可能状態: プリエンプション
  実行状態 --> 待機状態: I/O
  待機状態 --> 実行可能状態: I/O完了
```

## ER 図

```mermaid
erDiagram
    User ||--o{ Article : has
    Article ||--|{ Edit-History : has
    User }|..o{ Organization : belongs_to
```

## ガントチャート

```mermaid
gantt
  dateFormat  YYYY-MM-DD
  axisFormat  %m-%d
  title       XXXプロジェクト 計画
  excludes    weekends

  section リリース
  開発期間        :done, 2022-04-01, 2022-04-08
  アルファリリース期間 :active, 5d
  ベータリリース期間  :5d
  正式リリース      :milestone, 0d

  section 開発
  機能開発      :crit, done, 2022-04-01, 3d
  デバッグ      :crit, done, 2d
  アナウンス     :crit, done, 1d
  ベータ機能開発 :crit, active, 4d
  バグ修正      :4d
  最終検証      :1d

```

## 円グラフ

```mermaid
pie
    title 一日の時間の使いかた
    "睡眠" : 8
    "仕事" : 8
    "通勤時間" : 1
    "朝食" : 0.5
    "昼食" : 0.5
    "夕食" : 0.5
    "お風呂" :  0.5
    "休憩" :  2
    "勉強" :  3
```

## Git グラフ

```mermaid
gitGraph
  commit id: "1" tag:"2.0.0"
  commit
  branch develop
  commit
  commit
  commit
  checkout main
  commit
  commit
```

## 参考

https://qiita.com/Qiita/items/c07f3262d8f3b25f06c9
