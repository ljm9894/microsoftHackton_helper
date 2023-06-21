const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const behelper = async(req,res) => {
    const { inGroup,phoneNum, profileImg, proofImg, proofName, info, proofInfo} = req.body;
    try{
        const userId = req.user.userId
        const createBeHelper = await prisma.profile.create({
        data : {
            proofInfo,
            inGroup,
            phoneNum,
            profileImg,
            proofImg,
            proofName,
            info,
            user : { connect : { userId : userId}}
        }
    });
        return res.status(200).json({
            message : "헬퍼되기 성공"
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message : '헬퍼되기 실패'
        })
    }
    

}

module.exports = behelper