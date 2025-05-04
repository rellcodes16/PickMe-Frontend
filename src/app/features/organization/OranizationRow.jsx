import React from 'react';
import Button from '../../../UI/Button';
import { useNavigate } from 'react-router-dom';
import Modal from '../../appUI/AppModal';
import LeaveOrganization from './LeaveOrganization'; 
import { useLeaveOrganization } from '../../hooks/useLeaveOrg';

function OrganizationRow({ organization }) {
  const navigate = useNavigate();

  const { mutate: leaveOrg, isLoading } = useLeaveOrganization();

  const handleLeaveOrg = (organizationId) => {
    leaveOrg(organizationId);
  };

  const handleViewDetails = () => {
    navigate(`/organization/${organization._id}`, { state: { organization } });
  };

  const generateInitials = (name) => {
    const words = name.trim().split(' ');
    return words.length === 1
      ? words[0].slice(0, 2).toUpperCase()
      : (words[0][0] + words[1][0]).toUpperCase();
  };

  const getRandomColor = (seed) => {
    const hash = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const hue = hash % 360;
    return `hsl(${hue}, 70%, 60%)`;
  };

  const initials = generateInitials(organization.name);
  const bgColor = getRandomColor(organization.name);
  const modalName = `leave-${organization._id}`;

  return (
    <>
      <tr className="border-b border-gray-400 rounded-xl p-4 shadow flex justify-between items-center">
        <td className="flex items-center gap-3 text-lg font-semibold cursor-pointer">
          {organization.profilePicture ? (
            <img
              src={organization.profilePicture}
              alt={`${organization.name} logo`}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: bgColor }}
            >
              {initials}
            </div>
          )}
          <span onClick={handleViewDetails}>{organization.name}</span>
        </td>
        <td className="px-4 py-2 flex gap-2">
          <Button type="primaryTableBtn" onClick={handleViewDetails}>
            Details
          </Button>
          <Modal.Open openModalName={modalName}>
            <Button type="danger">Leave Org</Button>
          </Modal.Open>
        </td>
      </tr>

      <Modal.Window name={modalName}>
        <LeaveOrganization
          organization={organization}
          onCloseModal={() => {}}
          onConfirmLeave={() => handleLeaveOrg(organization._id)}
        />
      </Modal.Window>
    </>
  );
}

export default OrganizationRow;
