import { HiOutlineBell, HiOutlineUser } from "react-icons/hi2";
import AppColorMode from "./AppColorMode";
import { useNavigate } from "react-router-dom";
import AppIconButton from "./AppIconButton";

function AppHeaderOptions() {
    const navigate = useNavigate();

    return (
        <ul className="flex justify-end items-center gap-4 py-3">
            <li>
                <AppIconButton onClick={() => navigate('/updateuserdata')}>
                    <HiOutlineUser className="text-2xl cursor-pointer hover:text-violet-700 active:text-violet-700"/>
                </AppIconButton>
            </li>
            <li>
                <AppColorMode/>
            </li>
            <li>
                <AppIconButton onClick={() => navigate('/notification')}>
                    <HiOutlineBell className="relative text-2xl cursor-pointer hover:text-violet-700 active:text-violet-700"/>
                </AppIconButton>
            </li>
            {/* <li>
                <Logout/>
            </li> */}
        </ul>
    );
}

export default AppHeaderOptions;