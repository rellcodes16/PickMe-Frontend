import axios from 'axios';

console.log('hello')

export const getVotes = async () => {
    const { data } = await axios.get(
      `https://pickme-trz3.onrender.com/api/v1/votingsess/all`,
      { withCredentials: true }  
    );
    
    console.log(data);
    return data;
};