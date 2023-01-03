import POKEMON_TYPE from '@/constants/POKEMON_TYPE';

interface IProps {
  type: string;
}

/**
 * Validate pokemon type and return color based on each type
 * @param {string} - > pokemon type
 * @returns -> pokemon type object
 */
const conditionalPokemonType = ({ type }: IProps) => {
  const result: any = POKEMON_TYPE.filter(value => {
    return value.type === type;
  })[0];

  return result;
};

export default conditionalPokemonType;
