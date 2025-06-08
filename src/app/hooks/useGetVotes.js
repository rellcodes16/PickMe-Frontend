import { useQuery } from '@tanstack/react-query'
import { useDispatch } from 'react-redux' 
import toast from 'react-hot-toast'
import { getVotes } from '../api/vote'
import { setVotes } from '../../store/voteSlice'

export const useGetVotes = () => {
  const dispatch = useDispatch()

  return useQuery({
    queryKey: ['votes'],
    queryFn: getVotes,
    onSuccess: (votes) => {
      console.log(votes)
      dispatch(setVotes(votes)) 
      toast.success('Votes fetched successfully!')
    },
    onError: (err) => {
      console.error('Error fetching votes:', err.response?.data || err.message)
      toast.error('Oops! Unable to fetch votes.')
    },
  })
}
