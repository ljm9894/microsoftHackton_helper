const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getHelper = async(req, res) =>{
    try{
        const reqId = req.params.requestId;
        //const reqId = parseInt(req.params.requestId);
        const findRequest = await prisma.request.findFirst({
            where : {
                requestId : reqId
            }
        })

        const findHelper = await prisma.user.findFirst({
            where : {
                userId : findRequest.receiverId,
            }
        });
        const status = await prisma.progress.findFirst({
            where:{
                requestId : reqId
            }
        })
        const data = {
            helperName : findHelper.name,
            reqUser : req.user.name,
            reqDate : findRequest.updated_at,
            progress : status.status
        }
        console.log(status);
        return res.status(200).json({
            message : "데이터 조회성공",
            data
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            message : "헬퍼못찾음"
        })
    }
    
}

module.exports = getHelper