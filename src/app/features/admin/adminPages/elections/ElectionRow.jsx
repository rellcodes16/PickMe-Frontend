import { FaLock, FaPen, FaTrash } from "react-icons/fa";
import { Menu, List, Toggle, Button } from "../../../../appUI/AppMenu";

function ElectionRow({ election }) {
  return (
    <tr className="border-b border-gray-400">
      <td className="px-4 py-3 text-left">
        <span className="font-medium text-xl">{election.title}</span>
        <p className="text-sm text-gray-500 italic">{election.date}</p>
      </td>

      <td className="px-4 py-3 text-right">
        <Menu>
          <Toggle id={election._id} />
          <List id={election._id}>
            <Button icon={<FaPen />} onClick={() => console.log("Edit", election._id)}>Edit</Button>
            <Button icon={<FaLock />} onClick={() => console.log("Edit", election._id)}>Close</Button>
            <Button icon={<FaTrash />} onClick={() => console.log("Delete", election._id)}>Delete</Button>
          </List>
        </Menu>
      </td>
    </tr>
  );
}

export default ElectionRow;
