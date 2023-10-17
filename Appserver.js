//앱서버 관련
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// MySQL 데이터베이스 연결 설정
const db = mysql.createConnection({
  host: '34.168.81.56',
  user: 'root',
  database: 'yaming',
  password: 'qwer1234'
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 라우트 설정
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // 여기서 MySQL 데이터베이스를 쿼리하여 인증 로직을 수행
  // 결과에 따라 응답을 생성

  // 예시: 인증 성공 시 토큰을 생성하고 전송
  if (email === 'user@example.com' && password === 'password123') {
    const token = 'your_access_token';
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: 'Authentication failed' });
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});