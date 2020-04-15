const Item = require('../models/itens');

module.exports = {
    
    //criar um item 
    async create(req, res)  {
        const {name, category, amount, value} = req.body;
        const item = await Item.create({
            name,
            category,
            amount,
            value,
        });
        return res.json(item);
    },


    // retornar todos os itens
    async index(req, res){
        const itens = await Item.find();

        return res.json(itens);
    }, 


    //deletar um item 
    async delete(req, res){

        const itens = await Item.delete

        return res.json();

    }

};