const Button = ({ children, disabled, type, onClick, value }) => {

    const base = "mt-4 font-semibold rounded-3xl shadow inline-block cursor-pointer"

    const styles = {
        primary: base + ' px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-xl p-3',
        primarySquareBtn: base + ' bg-violet-700 text-white px-6 py-2 rounded-md hover:bg-violet-800',
        primaryTableBtn: base + ' bg-white text-violet-700 hover:bg-violet-700 rounded-md hover:text-white shadow-sm text-lg mx-1 p-1 w-[120px]',
        purpleBGButton: base + ' px-4 py-2 text-violet-600 bg-white text-lg',
        whiteBGButton: base + ' px-4 py-2 text-black bg-white text-md rounded-xl shadow-md',
        disabled: base + ' px-4 py-2 bg-gray-500 text-white',
        danger: 'px-3 py-1 text-sm font-semibold text-red-600 cursor-pointer bg-red-100 rounded-md hover:bg-red-200 hover:text-red-800 transition-all duration-200',
        notify: base + ' px-4 py-2 bg-none text-red-800'
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