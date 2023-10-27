const mysql = require('mysql2');

const pool = mysql.createPool //접속 정보
({
    host: '34.168.81.56',
    user: 'root',
    database: 'yaming',
    password: 'qwer1234',
    port: '5000',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

const getAllUser = async ()=>
{
    const promisePool = pool.promise();
    const [rows] = await promisePool.query('select * from user;');
    console.log(rows);
    return rows;
};

const getUser = async (req)=> //login
{
    const promisePool = pool.promise();
    const row = await promisePool.query(`select * from yaming.user where email = '${req}';`);
    console.log(row);
    return row;
};

//회원가입
const insertUser = async (req) => 
{
    const {name, email, password, phone, age, sex, height, weight} = req.body;
    const newUser = {name, email, password, phone, age, sex, height, weight};
    const promisePool = pool.promise();

    const [rows] = await promisePool.query(`insert into yaming.user 
    (name, email, password, phone, age, sex, height, weight)
    values ('Kim', '123@gmail.com', '1020', '010-2222-2222', 10, '여', 10, 10);`);
    
    console.log(rows);
    return rows;
};


module.exports = 
{
    getUser,
    getAllUser
};