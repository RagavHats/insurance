const router = require('express').Router();
let user = require('../models/Users');
let Company = require('../models/company');
var jwt = require('jsonwebtoken');
var Exjwt = require('express-jwt');
var nodemailer = require('nodemailer');
/* Get the details of accounts table in the form the JSON data ...*/
router.route('/').get((req,res) => {
    user.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error : ' + err));
});

/* Insert the account details with required feilds verify
   the email id already exists are not ..
...*/

router.route('/add').post((req,res) =>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new user({firstname , lastname , email , password});

    user.findOne({
        email 
    }).then(users =>{
        if(!users){
            newUser.save()
            .then(() => res.json("user added"))
            .catch(err => res.status(400).json('Error : ' + err));
        }else{
            res.json("Already Email Exists");
        }
    }).catch(err => { 
        res.send('Error' + err)
    })
});

/* Login validation process match the email and password for validation  */

router.route('/login').post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    user.findOne({
        email , password
    }).then(users => {
        if(!users){
           return res.json("Username and password are not matched");
        }else{
          // Create Token /
            const token = jwt.sign({_id : user.username} , process.env.SECERT);
            //put token in the cookie..
            res.cookie("token",token , {expire : new Date() + 9999 });
            // send the response to cookie
            return res.json({token})
        }
    }).catch(err => {
        return res.send('Error' + err);
    })
});

// Logout the user Details .....

router.route('/logout').post((req, res) => {
    res.clearCookie("token");
    res.json({
        message: "User signout successfully"
    });
});

///Create a company details and trigger a mail to the company...


router.route('/createcompany').post((req,res) =>{
    const {email , companyname , contactperson , address} = req.body;

    



    const newUser = new Company({email , companyname , contactperson , address});
    Company.findOne({
        email 
    }).then(companys =>{
        if(!companys){
            newUser.save()
            .then(users => {
                

                var body_details = `Hello , Greating from Techinos <br> <br>Company Name : ${companyname} ` + 
                        `<br> <br>Contact Person : ${contactperson} ` +`<br><br> Company Email : ${email} ` +
                        `<br> <br>Company address : ${address} <br><br><br>` + 
                        `Please <a href="http://localhost:3000/updatecreate/${users._id}" >Click Here </a>to Process` +
                        `<br> <br> Thanks and Regards <br> <br> Techinos `
                        ;

                var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'ragavhats8@gmail.com',
                    pass: '9894620688'
                }
                });

                var mailOptions = {
                from: 'ragavhats8@gmail.com',
                to: `${email}`,
                subject: 'Registration for the company details',
                html: `${body_details}`
                };

                transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
                });
                res.json("companydetails added")
            })
            .catch(err => res.status(400).json('Error : ' + err));

        }else{
            res.json("Already Email Exists");
        }
    }).catch(err => { 
        res.send('Error' + err)
    })
});

module.exports = router;