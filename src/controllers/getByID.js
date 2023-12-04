const axios = require('axios')
const URL = `https://pokeapi.co/api/v2/pokemon/`

module.exports = async (req, res) =>{

    try {
        const {id: pokeID } = req.params
        const response = await axios(URL + pokeID)
        const { data } = response;

        if(!data) res.status(500).send('Nothing here boss')

        const { id, name, height, weight } = data;
        const pokemon = {id, name, height, weight}

       

        return res.status(200).json(pokemon)

    } catch (error) {
        return res.status(500).send(error.message)
    }
}