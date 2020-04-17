const Item = require('../models/itens');

module.exports = {

    async searchByCategory(req, res){
        const category = req.query;
        const itens = await Item.find({
            category : category
        });

        return res.json(itens);
    }, 

    async searchByName(req, res){
        return res.json();

    }

}