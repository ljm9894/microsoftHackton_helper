const axios = require('axios');
const { response } = require('express');


const addressSelect = async(req, res) =>{
    const query = req.query.query;
    const apiKey = env.proces.apiKey;

    try{
        const res = await axios.get(`https://api.address.com/search?query=${query}&key=${apiKey}`);
        const address = res.data

    }catch(err){
        console.log(err);
        res.status(500).json({
            message : "주소 get 실패"
        })

    }
}


module.exports = addressSelect