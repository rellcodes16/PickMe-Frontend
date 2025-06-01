import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { createOrganization } from '../api/org';
import toast from 'react-hot-toast';
import { setOrganizations } from '../../store/orgSlice';

export const useCreateOrganization = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createOrganization,
    onSuccess: (data) => {
      toast.success('Organization created successfully');
      dispatch(setOrganizations(data.organizations || []));
      queryClient.invalidateQueries(['organizations']);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || 'Failed to create organization');
    },
  });
};
