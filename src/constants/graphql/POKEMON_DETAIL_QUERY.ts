const POKEMON_DETAIL_QUERY = `query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    height
    weight
    abilities {
      ability {
        name
      }
    }
    moves {
      move {
        name
      }
    }
    types {
      type {
        name
      }
    }
    sprites {
      front_default
      front_female
      front_shiny
    }
    stats {
      effort
      base_stat
      stat {
        name
      }
    }
  }
}`;

export default POKEMON_DETAIL_QUERY;
