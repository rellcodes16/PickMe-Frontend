import { useQuery } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'  
import toast from 'react-hot-toast'
import { getInvitations } from '../api/invite'
import { setInvitations } from '../../store/inviteSlice'

export const useGetInvites = () => {
    const dispatch = useDispatch()
  
    return useQuery({
      queryKey: ['invitations'],
      queryFn: getInvitations,
      onSuccess: (data) => {
        dispatch(setInvitations(data?.invitations))
      },
      onError: (err) => {
        console.error('Error fetching invites:', err.response?.data || err.message)
        toast.error('Error loading invitations')
      },
    })
  }
  
