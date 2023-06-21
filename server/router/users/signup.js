const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const crypto = require('crypto');

const signup = async (req, res) => {
  try {
    const { email, password, name, Address, birth, gender } = req.body;

   const ifUser = await prisma.user.findFirst({
    where:{
        email   
    }
   })
    console.log(ifUser);

    console.log(`ifUser === null : ${ifUser === null}`);
    if (ifUser !== null) {
      return res.status(409).json({
        message: "이미 존재하는 이메일입니다.",
      });
    }
    if (gender === null) {
      return res.status(409).json({
        message: "성별을 선택해주세요.",
      });
    }

    const hashedPassword = crypto
      .createHash('sha512')
      .update(password)
      .digest('base64');

    const user = {
      email,
      password: hashedPassword,
      name,
      Address,
      birth,
      gender,
    };
    const createUser = await prisma.user.create({
      data: user,
    });

    return res.status(200).send({ message: "회원가입 성공" });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: 'signUp오류',
    });
  }
};

module.exports = signup;
