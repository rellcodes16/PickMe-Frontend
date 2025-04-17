import React from "react";

function FormRowVertical({ label, children, icon: Icon }) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-md">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
          <Icon className="h-4 w-4" />
        </div>
        {React.cloneElement(children, {
          className:
            "pl-10 pr-3 py-2 border border-gray-400 rounded-sm w-full focus:outline-none focus:border-violet-700 " +
            (children.props.className || ""),
        })}
      </div>
    </div>
  );
}

export default FormRowVertical;
