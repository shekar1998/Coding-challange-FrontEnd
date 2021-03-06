import axios from 'axios';
import { UserSignUp, UserLogin } from '../interfaces/userInterface';
import { FORM_DISPLAY } from '../redux/actionTypes';

export const signUp = async (dispatch: any, user: UserSignUp) => {
  let res = await axios.post('http://localhost:4000/api/users/signup', user);
  console.log('SignUp Response', res);
  dispatch({ type: FORM_DISPLAY });
  return res;
};

export const login = async (user: UserLogin) => {
  let res = await axios.post('http://localhost:4000/api/users/login', user);
  console.log('Login Response  ', res);
  return res;
};

export const checkOtp = async (otp: any) => {
  let res = await axios.post(
    'http://localhost:4000/api/users-verify',
    { otp },
    {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('login'),
      },
    }
  );
  console.log('Login Response  ', res);
  return res;
};
