import Modal from "../../../../appUI/AppModal";
import RemoveAdmin from "./RemoveAdmin";

function AdminRow({ admin, orgName, onRemoveClick }) {
  return (
    <tr className="border-b border-gray-400">
      <td className="px-4 py-3 text-left">
        <span className="font-medium text-lg text-gray-800">{admin.name}</span>
        <div className="text-sm text-gray-500 italic">{admin.email}</div>
      </td>
      
      <Modal.Open openModalName="removeAdmin">
        <td className="px-4 py-3 text-right">
        <button
          onClick={() => onRemoveClick(admin)}
          className="px-3 py-1 text-sm font-semibold text-red-600 cursor-pointer bg-red-100 rounded-md hover:bg-red-200 hover:text-red-800 transition-all duration-200"
        >
          Remove
        </button>
      </td>
      </Modal.Open>
      <Modal.Window name="removeAdmin">
        <RemoveAdmin admin={admin} orgName={orgName} onRemoveClick={onRemoveClick}/>
      </Modal.Window>
    </tr>
  );
}

export default AdminRow;
