function RemoveAdmin({ admin, orgName, onConfirm, onCancel }) {
  return (
    <div className="w-[400px] p-5 text-center">
      <h2 className="text-xl font-semibold mb-6">
        Are you sure you want to remove <span className="font-bold italic">"{admin.name}"</span> from being an admin in <span className="font-bold italic">"{orgName}"</span>?
      </h2>
      <div className="flex justify-center gap-6">
        <button
          onClick={onConfirm}
          className="px-6 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition"
        >
          Yes, Remove
        </button>
        <button
          onClick={onCancel}
          className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md font-semibold hover:bg-gray-400 transition"
        >
          No, Cancel
        </button>
      </div>
    </div>
  );
}

export default RemoveAdmin
