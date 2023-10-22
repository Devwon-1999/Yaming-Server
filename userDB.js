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


module.exports = 
{
    getUser,
    getAllUser
};