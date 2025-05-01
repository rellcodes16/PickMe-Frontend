import React from 'react';
import { useLocation } from 'react-router-dom'; 

function OrganizationDetails() {
  const { state } = useLocation(); 
  const organization = state?.organization;

  return (
    <div>
      <h1 className='font-semibold text-2xl'>{organization?.name}</h1>
      <p className='m-2'>
        {organization?.description || 'This organization has no description available.'}
      </p>
    </div>
  );
}

export default OrganizationDetails;
