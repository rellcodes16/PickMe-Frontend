import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2"
import AppIconButton from "./AppIconButton"
import { useDarkMode } from "../../UI/ColorModeToggle"

function AppColorMode() {
  const { isDarkMode, toggleMode } = useDarkMode()

  return (
    <AppIconButton onClick={toggleMode}>
        {isDarkMode ? (<HiOutlineSun className="text-2xl cursor-pointer hover:text-violet-700 active:text-violet-700"/>) : (<HiOutlineMoon className="text-gray-600 text-2xl cursor-pointer hover:text-green-600 active:text-green-600"/>)}
    </AppIconButton>
  )
}

export default AppColorMode
