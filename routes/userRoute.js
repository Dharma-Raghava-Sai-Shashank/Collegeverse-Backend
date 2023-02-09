const express = require('express')
const router=express.Router()

const User=require('../entity/users')
const nodemailer = require('nodemailer')

router.post('/signup',async(req,res)=>{
    const {name,email,password}=req.body;
    const user = new User({name, email, password})
    var data=await User.findOne({email:email})
    if(!data)
    {
        var u=await user.save()
        return res.json({success:"true",token:u._id,message:"Signup successfull"})
    }
    return res.json({success:"false",token:"",message:"Email already exists"})
})

router.post('/signin',async(req,res)=>{
    const {email,password}=req.body
    var data=await User.findOne({email:email})
    if(!data)
        return res.json({success:"false",token:"",message:"Email does not exists"})
    else if(data.password==password) 
        return res.json({success:"true",token:data._id,message:"Signin succeccfull"})
    return res.json({success:"false",token:"",message:"Wrong Password"})
})

router.post('/generateOtp',async(req,res)=>{
    const {email}=req.body
    var data=await User.findOne({email:email})
    if(!data)
        return res.json({success:"false",token:"",message:"Email does not exists"})
    else
    {
        const otpTime = data.otptime;
        const timediff=((new Date()).getTime() - otpTime.getTime())/(1000*60);
        if(timediff<5)
        {
            return res.json({success:"false",token:"",message:"OTP expixed"})
        }
        var digits = '0123456789'; 
        let OTP = ''; 
        for (let i = 0; i < 6; i++ ) { 
            OTP += digits[Math.floor(Math.random() * 10)]; 
        }
        let transporter = nodemailer.createTransport({
            service:'gmail'
        })
        var message = {
            from:'dharmaraghavasaishashank@gmail.com',
            to:email,
            subject:"Collegeverse : OTP for Password Reset",
            text:"OTP for your Password Reset Request is "+OTP+".",
            html:"<p>OTP for your Password Reset Request is "+OTP+".</p>"
        }
        let info = await transporter.sendMail(message)
        console.log(info)
        return res.json({success:"true",token:email,message:"Email sent Successfull"})
    }
})

module.exports=router
