import React from 'react';
import OrganizationRow from './OranizationRow';

function OrganizationList({ organizations }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          {/* <tr className="border-b border-gray-400">
            <th className="px-4 py-2">Organization Name</th>
          </tr> */}
        </thead>
        <tbody>
          {organizations.map((org) => (
            <OrganizationRow key={org.id} organization={org} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrganizationList;
