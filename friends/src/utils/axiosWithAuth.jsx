import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      Authorization: token
    }
  });
};

/*
1.create file called axiosWithAuth 
2. import axios
3. set up function
4. inside the function we are using the getItem method. The getItem method allows you to access the data stored in the browsers local storage object. It only accepts one parameter, which is the KEY and returns the value as a STRING.
5. TOKENS are issued by the server and they are strings of random characters. A request has to have a header and a property of token
6.The token will be returned to us by the server after the user properly authenticates (properly logs in 😁). When you login, you want to save the token that’s returned to localStorage, so that the above axiosWithAuth module can grab it for other calls that require the Authorization header to be on it.
*/


