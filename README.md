# BlazorWithReactSample

Reactアプリケーション内にBlazor Componentを導入するサンプルアプリケーションです。

Blazor ComponentからReactで使えるコードを生成する箇所は [https://github.com/aspnet/samples](https://github.com/aspnet/samples/tree/2a12420a98bfa71a2def342e5f3dc5afbf7dda7f) を使用しています。

## How To Run

### Required

- .NET 6.0
- yarn
- Node 16.x
- git

### Initialize

```sh
# Blazor ComponentをJSから呼び出すコードを生成するBuilderの生成と、Reactアプリケーションをビルドするための環境を構築
$ make init
```

### Build Blazor Component

```sh
# watchモードでBlazorアプリケーションのビルドを行う
$ make watch/Blazor
```

### Build React

```sh
# watchモードでReactアプリケーションのビルドを行う
$ make watch/React
```

### Preview

```sh
# http://localhost:5000 などでホスティングする
$ make preview
```
