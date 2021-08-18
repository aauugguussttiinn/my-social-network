import { useDispatch } from 'react-redux';
import Cookies from "js-cookie";
import { loginUser } from "redux/actions/userActions";



export default async function loginUserWithCookie() {
  const dispatch = useDispatch();
  const token = Cookies.get('token')

  const response = await fetch(`http://localhost:1337/users/me`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  console.log(data)

  // const { id, username } = data;

  // const user = { id, username };

  // dispatch(editUser(user));
  // await dispatch(loginUser(userData))
};