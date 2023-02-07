const { Router } = require("express");
const {findPokemons, findPokemon, deletePokemon, updatePokemon, createPokemon} = require('../controllers/pokemon.controller')

const router = Router();

router.get('/', findPokemons)

router.get('/:id', findPokemon)

router.post('/', createPokemon)

router.patch('/:id', updatePokemon)

router.delete('/:id', deletePokemon)

module.exports = {
    pokemonRouter: router
}