import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../store/authSlice';
import { signupUser } from '../api/auth';

export const useSignup = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      console.log(data);
      dispatch(setCredentials({
        token: data.token,
        user: data.data.user
      }));
    },
    onError: (err) => {
      if (err.response) {
        console.error('Signup error response:', err.response);
        alert('Signup failed: ' + (err.response.data?.message || 'An error occurred'));
      } else if (err.request) {
        console.error('No response received:', err.request);
        alert('Signup failed: No response from the server');
      } else {
        console.error('Error:', err.message);
      }
    },
  });
};
