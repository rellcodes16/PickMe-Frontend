import axios from 'axios'

export const loginUser = async (credentials) => {
  const { data } = await axios.post(
    'https://pickme-trz3.onrender.com/api/v1/auth/login', 
    credentials,
    { withCredentials: true } 
  );
  console.log(data);
  return data;
}


export const signupUser = async (formData) => {
  // console.log(formData)
  const { data } = await axios.post('https://pickme-trz3.onrender.com/api/v1/auth/signup', formData);
  // console.log('heyyy')
  // console.log(formData)
  console.log({data})
  return data;
};


export const updateUserData = async (formData) => {
  const { data } = await axios.patch(
    'https://pickme-trz3.onrender.com/api/v1/auth/updateMe',
    formData,
    {
      withCredentials: true, 
    }
  );
  return data;
};

export const updateUserPassword = async (passwords) => {
  const { data } = await axios.patch(
    'https://pickme-trz3.onrender.com/api/v1/auth/updatePassword',
    passwords, 
    {
      withCredentials: true, 
    }
  );
  return data;
};
