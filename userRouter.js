const express = require('express');
const userDB = require('./userDB');
const router = express.Router();

router.get('/getAllUser', async (req, res)=>
{
    let res_get_allusers = 
    {
        status_code : 500,
        user : [] 
    };

    try
    {
        const rows = await userDB.getAllUser();
        res_get_allusers.status_code = 200;
        if(rows.length > 0)
        {
            rows.forEach((user)=>
            {
                res_get_allusers.user.push
                ({
                    email : user.email,
                    password : user.password,
                    name : user.name,
                });
            });
        }
        else
        {
            console.log('사용자 없음');
        }
    }
    catch(error)
    {
        console.log(error.message);
    }
    finally
    {

        //응답 
        //res.json(res_get_users);
        var result = '';

        for(var i = 0; i < res_get_allusers.user.length; i++)
        {
            result += "========================================<br>";
            result += " email : "+res_get_allusers.user[i].email+" <br>";
            result += " password : "+res_get_allusers.user[i].password+" <br>";
            result += " name : "+res_get_allusers.user[i].name+" <br>";
            result += "========================================<br>";
            
            result += "<br>";
        }

        res.send(result);
    }
});

router.post('/getUser', async (req, res) => { //login
    const row = await userDB.getUser(req.body.email);

    if(row !== null){
        return res.status(200).json({success : true, data : row[0][0]})
    }
    else{
        return res.json({success : false, row})
    }
});

//회원가입 구현 필요
router.post('/insertUser', async(req, res) => {
    await userDB.insertUser(req.body);
    return res.status(200).json({success : true})
    // if(row !== null){
    //     return res.status(200).json({success : true, data : row[0][0]})
    // }
    // else{
    //     return res.json({success : false, row})
    // }

});

module.exports = router;