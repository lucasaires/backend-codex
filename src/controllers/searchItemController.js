const Item = require('../models/itens');
const Image = require('../models/image');

module.exports = {

    async searchByCategory(req, res){
        try{
            const {category} = req.query;

            const itens = await Item.find({

                category : {
                    $in: category
                },
            })
            
            return res.json(itens);

        } catch(err){
            return res.status(400).send({error: "Erro na listagem dos itens"})

        }
    }, 

    async searchById(req, res){
        try{
            const itens = await Item.findById(req.params.itemId);
            
            return res.json(itens);

        } catch(err){
            return res.status(400).send({error: "Erro na listagem dos itens"})

        }
    }, 

}