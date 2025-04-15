const Button = ({ children, disabled, type, onClick, value }) => {

    const base = "px-4 py-2 mt-4 font-semibold rounded-3xl shadow inline-block cursor-pointer"

    const styles = {
        primary: base + ' bg-violet-600 hover:bg-violet-700 text-white text-xl p-3',
        purpleBGButton: base + ' text-violet-600 bg-white text-lg',
        disabled: base + ' bg-gray-500 text-white',
        danger: base + ' bg-red-500 text-white',
        notify: base + ' bg-none text-red-800'
    }

    
  if(onClick)
  return (
    <button
        onClick={onClick}
        disabled={disabled}
        className={styles[type]}
        value={value}
    >
        {children}
    </button>
  )

  return (
    <button disabled={disabled} onClick={onClick} className={styles[type]}>
        {children}
    </button>
  )
}

export default Button