const User = require('../models/user.js');
const bcript = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json')


module.exports = {

    async create(req,res){

        try{

        const user =  await User.create(req.body);

        user.password = undefined;
    
        const token = jwt.sign({id: user.id}, authConfig.secret, {expiresIn: 86400});

        return res.send({user, token});   

    } catch (err){

        return res.status(400).send({error :' Erro ao cadastrar, tente novamente!!'});
    }      

    
    },

    async authenticate(req, res){
        const{email, password} = req.body;

        const user = await User.findOne({email}).select('+password');

        if(!user){
            return res.status(400).send({error :' Erro ao encontrar o usuário, tente novamente!!'});
        }

        if(!await bcript.compare(password, user.password)){
            return res.status(400).send({error :' Senha não encontrada, tente novamente!!'});
        }

        user.password = undefined;

        const token = jwt.sign({id: user.id}, authConfig.secret, {expiresIn: 86400});

        return res.send({user, token});
    
    },

}