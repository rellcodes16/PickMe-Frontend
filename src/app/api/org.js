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

export const createOrganization = async (orgData) => {
  const formData = new FormData();
  formData.append('name', orgData.name);
  formData.append('description', orgData.description);
  if (orgData.profilePicture) {
    formData.append('profilePicture', orgData.profilePicture);
  }
  formData.append('validEmailDomain', orgData.validEmailDomain);

  const { data } = await axios.post(
    'https://pickme-trz3.onrender.com/api/v1/org/create',
    formData,
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return data;
};




