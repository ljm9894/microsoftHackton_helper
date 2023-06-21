const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getUser = async(req,res) =>{

    const userId = req.user.userId;

    try{
        const user = await prisma.user.findFirst({ where : { userId} })
       // console.log(user);
        const data = {
            email : user.email,
            name : user.name,
            birth : user.birth,
            gender : user.gender,
            address : user.Address,                          
        }
        res.status(200).json({
            message : '유저 정보 찾기 완료',
            data
        })
    }catch(err){
        console.log(err),
        res.status(500).json({
            message : '유저 정보 찾기 실패'
        })
    }

}

module.exports = getUser;