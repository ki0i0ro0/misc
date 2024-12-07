const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// ミドルウェアの設定
app.use(express.json()); // JSONボディをパース
app.use(cookieParser()); // クッキーパーサーを有効化
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // すべてのオリジンを許可
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // 許可するHTTPメソッド
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // 許可するヘッダー
  // res.setHeader("Access-Control-Allow-Credentials", "true"); // クレデンシャル付きリクエストを許可
  next();
});

// ダミーの認証情報
const DUMMY_USER = {
  username: "admin",
  password: "admin",
  token: "dummy-auth-token",
};

// ログインAPI
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // 簡単な認証チェック (実際はDBやハッシュ化を使うべき)
  if (username === DUMMY_USER.username && password === DUMMY_USER.password) {
    // クッキーにトークンを設定
    res.cookie("authToken", DUMMY_USER.token, {
      httpOnly: true, // クライアントサイドでJavaScriptによるアクセスを防止
      secure: process.env.NODE_ENV === "production", // HTTPSでのみ送信 (本番環境ではtrue)
      sameSite: "lax", // ページ遷移
      maxAge: 24 * 60 * 60 * 1000, // クッキーの有効期限 (1日)
    });

    return res.status(200).json({ message: "Login successful!" });
  }

  res.status(401).json({ message: "Invalid credentials!" });
});

// ユーザー情報取得API
app.get("/profile", (req, res) => {
  console.log(req.cookies);
  const authToken = req.cookies.authToken;

  if (authToken === DUMMY_USER.token) {
    return res
      .status(200)
      .json({ message: "Authenticated!", user: DUMMY_USER });
  }

  res.status(401).json({ message: "Not authenticated!" });
});

// ログアウトAPI
app.post("/logout", (req, res) => {
  // クッキーを削除
  res.clearCookie("authToken");
  res.status(200).json({ message: "Logout successful!" });
});

// サーバーの起動
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
