const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const status = async(req, res) =>{
   //const { user } = req.body;

   const reqId = req.user.userId;
   try{

    const reqUser = prisma.request.create({
        
        data:{
            senderId : {connect : {userId : reqId}}
            
        }
    })
   }catch(err){
    console.log(err);
    res.status(500).json({
        message: "요청에러"
    })
   }
   
    
    
    return res.status(202).json({
        message : "성공"
    })
}

module.exports = status