// //앱서버 관련
// const express = require('express');
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');
// const router = express.Router();

// // MySQL 데이터베이스 연결 설정
// const db = mysql.createConnection({
//   host: '34.168.81.56',
//   user: 'root',
//   database: 'yaming',
//   password: 'qwer1234',
//   port: '5000',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

// db.connect(err => {
//   if (err) {
//     console.error('MySQL connection error:', err);
//   } else {
//     console.log('Connected to MySQL database');
//   }
// });

// // 라우트 설정
// router.get('/api/login', (req, res) => {
//   const { email, password } = req.body;

//   // 여기서 MySQL 데이터베이스를 쿼리하여 인증 로직을 수행
//   // 결과에 따라 응답을 생성

//   // 예시: 인증 성공 시 토큰을 생성하고 전송
//   if (email === 'user@example.com' && password === 'password123') {
//     const token = 'your_access_token'; 
//     res.json({ success: true, token });
//   } else {
//     res.status(401).json({ success: false, message: 'Authentication failed' });
//   }
// });

// module.exports = router;

//앱서버 관련
const express = require('express');
const router = express.Router();

// 라우트 설정
router.post('/user', (req, res) => {
  //var email = getPrameter("email");
  //var password = getPrameter("password");
  //&& password === 'password123'

  if (req.body.email === 'user@example.com') {
    const token = 'your_access_token'; 
    console.log('login success');
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: 'Authentication failed' });
    console.log('login fail');
  }
});

module.exports = router;