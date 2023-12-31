const mysql = require('mysql2');

const pool = mysql.createPool //접속 정보
({
    host: '****',
    user: 'root',
    database: '****',
    password: '****',
    port: '****',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

const getAllUser = async ()=> //모든 유저 정보
{
    const promisePool = pool.promise();
    const [rows] = await promisePool.query('select * from user;');
    console.log(rows);
    return rows;
};

const getUser = async (req)=> //로그인
{
    const promisePool = pool.promise();
    const row = await promisePool.query(`select * from yaming.user where email = '${req}';`);
    console.log(row);
    return row;
};

const insertUser = async (req) => //회원가입
{
    const promisePool = pool.promise();

    console.log(req);
    const [rows] = await promisePool.query(`insert into yaming.user 
    (name, email, password, phone, age, sex, height, weight)
    values ('${req.data.name}', '${req.data.email}', '${req.data.password}', '${req.data.phone}', ${req.data.age}, '${req.data.sex}', ${req.data.height}, ${req.data.weight});`);
    
    console.log(rows);
};

const getUserData = async (req) =>
{
    const promisePool = pool.promise();
    console.log(req);
    const [meal] = await promisePool.query(`select userMeal.*
                                            from user join userMeal ON user.usernum = userMeal.usernum
                                            where user.email='${req}';`);
    console.log(meal);
    return meal;
};

const insertMeal = async (req) =>
{
    const promisePool = pool.promise();

    console.log(req);
    const [rows] = await promisePool.query(`insert into yaming.user 
    (name, email, password, phone, age, sex, height, weight)
    values ('${req.data.name}', '${req.data.email}', '${req.data.password}', '${req.data.phone}', ${req.data.age}, '${req.data.sex}', ${req.data.height}, ${req.data.weight});`);

    console.log(rows);
};

module.exports = 
{
    getUser,
    getAllUser,
    insertUser,
    getUserData,
    insertMeal
};
