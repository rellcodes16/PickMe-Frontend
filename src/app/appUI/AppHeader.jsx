import AppHeaderOptions from "./AppHeaderOptions"

const AppHeader = () => {
  return (
    <div className="bg-white h-[80px] w-full px-4 flex justify-end">
      {/* <Profile /> */}
      <AppHeaderOptions />
    </div>
  )
}

export default AppHeader