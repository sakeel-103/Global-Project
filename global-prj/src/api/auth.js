import axios from 'axios';

const BASE_URL = 'https://reqres.in/';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}api/login`, {
      email,
      password
    });
    return {
      success: true,
      token: response.data.token
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.error || 'Login failed'
    };
  }
};