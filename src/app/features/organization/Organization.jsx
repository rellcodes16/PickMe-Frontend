import React, { useState } from 'react';
import OrganizationList from './OrganizationList';

function Organization() {
  const [organizations, setOrganizations] = useState([
    { id: 1, name: 'Tech Enthusiasts' },
    { id: 2, name: 'AI Researchers' },
  ]); 

  const handleCreateNewOrg = () => {
    alert('Create a new organization');
  };

  return (
    <div className="p-4">
      <h1 className="italic font-semibold text-2xl mb-4">My Organizations</h1>
      <div className='flex justify-end'>
        <button 
          className="mb-4 px-4 py-2 cursor-pointer bg-white text-violet-700 font-semibold rounded-md shadow-md hover:bg-violet-700 hover:text-white" 
          onClick={handleCreateNewOrg}>
            + Create New Org
        </button>
      </div>
      <OrganizationList organizations={organizations} />
    </div>
  );
}

export default Organization;
