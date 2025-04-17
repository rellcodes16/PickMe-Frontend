import AppNav from "./AppNav"

const AppSidebar = () => {
  return (
    <aside className="pt-8 sm:max-w-[300px] overflow-auto">
      {/* <Logo /> */}
      <AppNav />
    </aside>
  )
}

export default AppSidebar