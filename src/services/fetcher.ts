interface IFetchConfig {
  url: string;
  bodyData: unknown;
  method: string;
}

const fetcher = ({ url, bodyData, method }: IFetchConfig) => {
  const params = {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyData),
    method,
  };

  return fetch(url, params)
    .then(resp => {
      if (!resp.ok) {
        // throw error to catch block
        return Promise.reject(resp);
      }
      return resp.json();
    })
    .then(data => {
      return data;
    })
    .catch(e => {
      // return error response
      return e?.json().then((resp: any) => {
        const errObj = {
          ...resp,
          code: e.status,
        };
        return Promise.reject(errObj);
      });
    });
};

export default fetcher;
