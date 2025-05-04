import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { removeOrganization } from '../../store/orgSlice';
import { leaveOrganization } from '../api/org';
import toast from 'react-hot-toast';

export const useLeaveOrganization = () => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: leaveOrganization,
      onSuccess: (data, organizationId) => {
        toast.success('Left the organization successfully.');
        dispatch(removeOrganization(organizationId));
  
        queryClient.invalidateQueries(['organizations']);
      },
      onError: (error) => {
        toast.error(
          error?.response?.data?.message || 'Failed to leave organization.'
        );
      },
    });
  };
  
