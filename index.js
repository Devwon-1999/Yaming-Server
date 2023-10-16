// 서버 메인 코드
//const express = require('필요한 모듈명')
//npm run start (서버 시작)
const express = require('express');
const userRouter = require('./userRouter');

const app = express();
const port = 3000;

app.use(express.json());
app.use(`/user`, userRouter);

app.get('/', (req, res) => {
    res.json({
        success: true,
        
    });
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});