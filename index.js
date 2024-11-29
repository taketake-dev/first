const http = require('http');

// サーバーを作成
const server = http.createServer((req, res) => {
  // ヘッダーを設定（ステータスコード200とContent-Typeを指定）
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  // 画面に表示するHTML内容
  res.end('<h1>Hello, World!</h1>');
});

// サーバーをポート3000で起動
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});
