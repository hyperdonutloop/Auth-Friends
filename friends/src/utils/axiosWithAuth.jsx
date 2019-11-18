import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token'); //getting token from our local storage. when we login we are setting the token we get from our API to local storage
  return axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      Authorization: token //any requests that we make that need that token ^^^, will get the token inside the header. this lets us authenticate as users of this software.
    }
  });
};

/*
- create file called axiosWithAuth 

- import axios

- set up function.

 - inside the function we are using the getItem method. The getItem method allows you to access the data stored in the browsers local storage object. It only accepts one parameter, which is the KEY and returns the value as a STRING.

- TOKENS are issued by the server and they are strings of random characters. A request has to have a header and a property of token

- The token will be returned to us by the server after the user properly authenticates (properly logs in 😁). When you login, you want to save the token that’s returned to localStorage, so that the above axiosWithAuth module can grab it for other calls that require the Authorization header to be on it.

- axios.Create creates a new 'instance' of axios with a custom config. 

- with baseUrl you don't have to type in the full url

*/


