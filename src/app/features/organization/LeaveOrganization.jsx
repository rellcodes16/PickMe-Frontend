import React from 'react';
import Button from '../../../UI/Button';

function LeaveOrganization({ onCloseModal, onConfirmLeave, organization }) {
  return (
    <div className="text-center space-y-4 max-w-xs">
      <p className="text-gray-600">
        Are you sure you want to leave <strong>"{organization.name}"</strong>?
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <Button type="danger" onClick={() => { onConfirmLeave(); onCloseModal(); }}>
          Yes, Leave
        </Button>
        <Button type="whiteBGButton" onClick={onCloseModal}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default LeaveOrganization;
