
const TextArea = ({label, type,placeholder,required}) => {
  return (
    <div className="w-full flex flex-col gap-1  items-start">
          {/* label component */}
          <div>
            <label className="text-[16px] font-semibold">{label}</label>
            {required && <span className='text-red-500 text-[16px]  ml-1'>*</span>}
          </div>
          <textarea
            type={type}
            placeholder={placeholder}
            required={required}
            className={`w-full p-2 py-3 border border-blue-400 focus:outline-blue-400 
              rounded-md text-[16px] placeholder:text-[16px] text-gray-600`}
          />
        </div>
  )
}

export default TextArea
