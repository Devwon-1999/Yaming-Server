const express = require('express');
const userDB = require('./userDB');
const router = express.Router();

router.get('/getUser', async (req, res)=>
{
    let res_get_users = 
    {
        status_code : 500,
        user : [] 
    };

    try
    {
        const rows = await userDB.getUser();
        res_get_users.status_code = 200;
        if(rows.length > 0)
        {
            rows.forEach((user)=>
            {
                res_get_users.user.push
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

        for(var i = 0; i < res_get_users.user.length; i++)
        {
            result += "========================================<br>";
            result += " email : "+res_get_users.user[i].email+" <br>";
            result += " password : "+res_get_users.user[i].password+" <br>";
            result += " name : "+res_get_users.user[i].name+" <br>";
            result += "========================================<br>";
            
            result += "<br>";
        }

        res.send(result);
    }
});


module.exports = router;