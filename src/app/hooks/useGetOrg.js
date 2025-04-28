import { useQuery } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { setOrganizations } from '../../store/orgSlice'
import { getOrganizations } from '../api/org'  
import toast from 'react-hot-toast'

export const useGetOrganizations = () => {
  const dispatch = useDispatch()

  return useQuery({
    queryKey: ['organizations'],
    queryFn: getOrganizations,
    onSuccess: (data) => {
      const organizations = data?.data?.organizations || []
      dispatch(setOrganizations(organizations)) 
      toast.success('Organizations fetched successfully!')
    },
    onError: (err) => {
      console.error('Error fetching organizations:', err.response?.data || err.message)
      toast.error('Oops! Unable to fetch organizations.')
    },
  })
}
