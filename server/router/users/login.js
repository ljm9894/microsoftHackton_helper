const { PrismaClient} = require('@prisma/client');
const crypto = require('crypto');
const prisma = new PrismaClient();
const login = async (req, res) => {
    // 사용자 인증 로직
    const { email, password } = req.body;
    //console.log(req.body);
  
    // 사용자 검증 및 인증 후 사용자 정보 가져오기
    const user = await prisma.user.findFirst({ where: { email } });
    const hashedLoginPassword = crypto.createHash('sha512').update(password).digest('base64');
    if (!user || user.password !== hashedLoginPassword) {
      return res.status(401).json({ message: '유효하지 않은 사용자 이름 또는 비밀번호입니다.' });
    }
    
  
    return res.status(200).json({ 
        
        message : "로그인 성공"
    });
  };

  const logout = () =>{
    return res.status(200).json({
        message : "로그아웃 성공"
    })
  }

module.exports = {
    login,
    logout
}