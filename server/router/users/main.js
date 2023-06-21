
const main = (req, res)=>{
    const loginName = req.user.name;
    
    return res.status(200).json({
        name : loginName,
        message : '로그인 성공'
    });
}

module.exports = main