import fetcher from './fetcher';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface IProps {
  query: string;
  variables: unknown;
}

const getPokemonDetailData = async ({ query, variables }: IProps) => {
  const fetchConfig = {
    url: `${BASE_URL}`,
    bodyData: { query, variables },
    method: 'POST',
  };
  const response = await fetcher(fetchConfig);
  return response;
};

export default getPokemonDetailData;
