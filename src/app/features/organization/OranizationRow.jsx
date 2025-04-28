import React from 'react';
import Button from '../../../UI/Button';
import { useNavigate } from 'react-router-dom'; 

function OrganizationRow({ organization }) {
  const navigate = useNavigate();

  const handleLeaveOrg = () => {
    alert(`Leaving organization: ${organization.name}`);
  };

  const handleViewDetails = () => {
    navigate(`/organization/${organization._id}`, { state: { organization } }); 
  };

  return (
    <tr className="border-b border-gray-400 flex justify-between py-1">
      <td className="px-4 py-2 pt-7 text-lg font-semibold cursor-pointer">{organization.name}</td>
      <td className="px-4 py-2">
        <Button type='primaryTableBtn' onClick={handleViewDetails}>Details</Button>
        <Button type='danger' onClick={handleLeaveOrg}>Leave Org</Button>
      </td>
    </tr>
  );
}

export default OrganizationRow;
