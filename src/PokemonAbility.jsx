import React from 'react'

const PokemonAbility = ({ abilityName }) => (
  <div className="pokemon-ability">
    <div className="pokemon-ability-type">Hidden ability</div>
    <div data-testid={`ability/${abilityName}`} className="pokemon-ability-name">
      {abilityName}
    </div>
  </div>
)

export default PokemonAbility
