import axios from "axios";

export const getInvitations = async () => {
  const { data } = await axios.get(
    'https://pickme-trz3.onrender.com/api/v1/invitation/get-pending-invites',
    { withCredentials: true }
  );

  console.log("Fetched invitations response:", data);
  return data;
};
