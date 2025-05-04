import React from 'react'
import { useGetOrganizations } from '../../hooks/useGetOrg'
import OrganizationList from './OrganizationList'
import Modal from '../../appUI/AppModal'
import CreateOrganization from './CreateOrganization'

function Organization() {
  const { data, isLoading, isError, error } = useGetOrganizations()

  const organizations = data?.data?.organizations || []

  const handleCreateNewOrg = () => {
    alert('Create a new organization')
  }

  if (isLoading) return <p>Loading organizations...</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <div className="p-4">
      <h1 className="italic font-semibold text-2xl mb-4">My Organizations</h1>
      <div className="flex justify-end">
        <Modal.Open openModalName="createOrg">
          <button
            className="mb-4 px-4 py-2 cursor-pointer bg-white text-violet-700 font-semibold rounded-md shadow-md hover:bg-violet-700 hover:text-white"
            onClick={handleCreateNewOrg}
          >
            + Create New Org
          </button>
        </Modal.Open>
        <Modal.Window name='createOrg'>
          <CreateOrganization />
        </Modal.Window>
      </div>
      <OrganizationList organizations={organizations} /> 
    </div>
  )
}

export default Organization
