export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const createUser = (data) => {
  return (dispatch) => {
    return fetch('http://localhost:1337/auth/local/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  };
};

export const loginUser = (userData) => async(dispatch) => {
  
  const config = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  };

  const res = await fetch('http://localhost:1337/auth/local', config)
  const data = await res.json();
  if (data.user) {
    dispatch({ type: LOGIN_USER, payload: data });
  } else {
    console.log('login fetch not working')
  }
};


// export const createUser = (data) => {
//   return (dispatch) => {
//     return axios
//       .post(`http://localhost:1337/auth/local/register`, data)
//       .then(() => {
//         dispatch({ type: CREATE_USER, payload: data });
//       })
//       .catch((err) => console.log(err));
//   };
// };