const Item = require('../models/itens');
const Image = require('../models/image');


module.exports = {
    
    //criar um item 
    async create(req, res)  {
       
        try{
            item = await Item.create({...req.body, user: req.userId});
            return res.send({item});

    }catch (err){
        return res.status(400).send({error: "Erro Na criação do item"});
    }
       
    },


    // retornar todos os itens
    async index(req, res){
        try{
            const itens = await Item.find();
            return res.json(itens);

        } catch(err){
            return res.status(400).send({error: "Erro na listagem dos itens"});

        }
    }, 

    async update(req,res){
        try{

            const{value,amount} = req.body; 

            const item = await Item.findByIdAndUpdate(req.params.itemId, {
                value,
                amount 
             } , {new: true });

             return res.json(item);

        }catch{
            return res.status(400).send({error: "Erro na modificação do item"});
        }
    },


    //deletar um item 
    async delete(req, res){

        try{
            await Item.findByIdAndRemove(req.params.itemId);
            
            return res.json();

        } catch(err){
            return res.status(400).send({error: "Erro na remoção do item"});

        }
    },

    async upload(req, res){

        const{ originalname: name, size, filename:key} = req.file;

        const image = await Image.create({
            name,
            size,
            key,
            item : req.params.itemId,
            url: ''
        });

        const item = await Item.findById(req.params.itemId);
        item.image = image;
        

        return res.json(item);

    }
};