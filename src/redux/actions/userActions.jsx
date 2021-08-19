export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGIN_USER';
export const SET_USER_PROFILE = 'GET_USER_PROFILE';


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

export const logoutUser = () => {
  return {}
};

export const setUser = (cookiesConfig) => async(dispatch) => {

  const response = await fetch(`http://localhost:1337/users/me`, cookiesConfig)
  const cookieData = await response.json();
  dispatch({ type: SET_USER_PROFILE, payload: cookieData })
};