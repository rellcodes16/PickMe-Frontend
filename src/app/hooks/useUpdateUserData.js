import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../store/authSlice';
import { updateUserData } from '../api/auth';

export const useUpdateUser = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: updateUserData,
    onSuccess: (data) => {
      console.log('Update success:', data);
      dispatch(setCredentials({
        token: null, 
        user: data.data.user
      }));
    },
    onError: (err) => {
      if (err.response) {
        console.error('Update error response:', err.response);
        alert('Update failed: ' + (err.response.data?.message || 'An error occurred'));
      } else if (err.request) {
        console.error('No response received:', err.request);
        alert('Update failed: No response from the server');
      } else {
        console.error('Error:', err.message);
        alert('Update failed: ' + err.message);
      }
    },
  });
};
