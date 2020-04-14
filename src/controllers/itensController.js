module.exports = {
    
    //criar um item 
    async create(req, res) {
        const {id, name, amount, category, value, img} = req.body;
        
        return res.json({id});
    },


    // retornar todos os itens
    async index(req, res){

        return res.json();
    }, 


    //deletar um item 
    async delete(req, res){

        return res.json();

    }

};