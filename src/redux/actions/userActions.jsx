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

export const loginUser = (data) => {
  // console.log(data)
  return (dispatch) => {
    return fetch('http://localhost:1337/auth/local', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(() => {
      dispatch({ type: LOGIN_USER, payload: data });
    })
    .catch((err) => console.log(err));
  };
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