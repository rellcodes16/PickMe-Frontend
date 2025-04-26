import React from 'react';
import Button from '../../../UI/Button';

function OrganizationRow({ organization }) {
  const handleLeaveOrg = () => {
    alert(`Leaving organization: ${organization.name}`);
  };

  const handleViewDetails = () => {
    alert(`Viewing details of organization: ${organization.name}`);
  };

  return (
    <tr className="border-b border-gray-400 flex justify-between py-1">
      <td className="px-4 py-2 pt-7 text-lg font-semibold cursor-pointer">{organization.name}</td>
      <td className="px-4 py-2">
        <Button
          type='primaryTableBtn'
          onClick={handleViewDetails}
        >
          Details
        </Button>
        <Button
          type='danger'
          onClick={handleLeaveOrg}
        >
          Leave Org
        </Button>
      </td>
    </tr>
  );
}

export default OrganizationRow;
