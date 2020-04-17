const Item = require('../models/itens');


module.exports = {
    
    //criar um item 
    async create(req, res)  {
       
        try{
            
            console.log(req.userId)
            item = await Item.create({...req.body, user: req.userId});
            return res.send({item});

    }catch (err){
        return res.status(400).send({error: "Erro Na criação do item"})
    }
        
       
    },


    // retornar todos os itens
    async index(req, res){
        try{
            const itens = await Item.find();
            return res.json(itens);

        } catch(err){
            return res.status(400).send({error: "Erro na listagem dos itens"})

        }
    }, 

    async update(req,res){
        return res.send( {user: req.userId});
    },


    //deletar um item 
    async delete(req, res){

        const item = await Item.findOneAndDelete(req.body.name)

        return res.json(item);

    }

};