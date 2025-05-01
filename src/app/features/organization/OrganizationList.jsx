import React from 'react';
import OrganizationRow from './OranizationRow';
import Modal from '../../appUI/AppModal';

function OrganizationList({ organizations }) {
  return (
    <Modal>
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          {/* <tr className="border-b border-gray-400">
            <th className="px-4 py-2">Organization Name</th>
          </tr> */}
        </thead>
        <tbody>
          {organizations.map((org) => (
            <OrganizationRow key={org._id} organization={org} />
          ))}
        </tbody>
      </table>
    </div>
    </Modal>
  );
}

export default OrganizationList;
