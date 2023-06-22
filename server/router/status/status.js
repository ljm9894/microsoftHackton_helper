const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const status = async(req, res) =>{
   const { progress } = req.body;
   const userId = req.user.userId
   const reqId = parseInt(req.params.requestId);
   try{
    if(progress === 'HOSPITAL'){
        const reqUser = await prisma.progress.create({
        
            data:{
                user : {connect : {userId }},
                request : {connect : { requestId : reqId}} ,
                status : "Hospital",
                updated_at : new Date() 
            }
        })
    
    }else if(progress === 'Finish'){
        const reqUser = await prisma.progress.create({
        
            data:{
                user : {connect : {userId }},
                request : {connect : { requestId : reqId}} ,
                status : "Finish",
                updated_at : new Date() 
            }
        })
    }else{
        return res.status(409).send({
            message : "다른 값이 입력되었습니다."
        })
    }
    return res.status(200).json({
        message : "progress 성공"
    })

    
   }catch(err){
    console.log(err);
    res.status(500).json({
        message: "progress 에러"
    })
   }
   
}

module.exports = status