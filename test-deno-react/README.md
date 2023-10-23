# Vite + Deno + React

## Running

You need to have Deno v1.25.4 or later intalled to run this repo.

Start a dev server:

```
$ deno task dev
```

## Deploy

Build production assets:

```
$ deno task build
```

## Notes

- You need to use `.mjs` or `.mts` extension for the `vite.config.[ext]` file.

## Papercuts

Currently there's a "papercut" for Deno users:

- peer dependencies need to be referenced in `vite.config.js` - in this example
  it is `react` and `react-dom` packages that need to be referenced

## Links

- [Deno インストール](https://qiita.com/m_mitsuhide/items/6db4f60f08a0747ef151)

- [Deno のフロントエンド開発の動向【2022 年秋】](https://zenn.dev/uki00a/articles/frontend-development-in-deno-2022-autumn)
