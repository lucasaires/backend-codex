module.exports = {
    
    //criar uma sessão 
    async create(req, res) {
        const {cpf} = req.body;
        
        return res.json({id});
    }
};