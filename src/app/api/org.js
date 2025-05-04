import axios from 'axios';

export const getOrganizations = async () => {
  const { data } = await axios.get(
    'https://pickme-trz3.onrender.com/api/v1/org/my-organizations',
    { withCredentials: true }  
  );
  
  console.log(data);
  return data;
};

export const leaveOrganization = async (organizationId) => {
  const { data } = await axios.post(
    'https://pickme-trz3.onrender.com/api/v1/org/leave-org',
    { organizationId },
    { withCredentials: true }
  );
  return data;
};




