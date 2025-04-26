import { useMutation } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { loginUser } from '../api/auth'
import { setCredentials } from '../../store/authSlice'
import toast from 'react-hot-toast'

export const useLogin = () => {
  const dispatch = useDispatch()

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      dispatch(setCredentials(data))
      toast.success('Login Successful!!')
    },
    onError: (err) => {
      console.error('Login error:', err.response?.data || err.message)
      toast.error('Oopps!! Unable to Login :(')
    },
  })
}
