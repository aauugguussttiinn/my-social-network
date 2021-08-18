import Cookies from "js-cookie";


const loginUserWithCookie = async() => {
  const token = Cookies.get('token')

  const cookiesConfig = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(`http://localhost:1337/users/me`, cookiesConfig);
  const cookieData = await response.json();
  if (cookieData) {
    return true;
  } else {
    return false;
  }

};

const checkAuth = (stateValue) => {
  if (stateValue) {
  // if (stateValue || loginUserWithCookie()) {
    console.log('User is logged in');
    return true;
  } else {
    console.log('User is NOT logged in');
    return false;
  }
}

export default checkAuth();