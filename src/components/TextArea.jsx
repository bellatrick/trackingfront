import React from 'react'

const TextArea = ({placeholder, rows,label,id,name, handleChange,value,data_testid}) => {
    return (
        <div className='mb-6'>
            <div className="sm:pt-5">
              <label htmlFor="about" className="block text-sm text-left font-medium mb-4 text-gray-500">
                {label}
              </label>
              <div className="mt-1 sm:mt-0 text-base ">
                <textarea
                  id={id}
                  name={name}
                  value={value}
                  data-testid={data_testid}
                  rows={rows}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className=" p-2 bg-gray-50  block w-full focus:ring-tertiarylight focus:border-tertiarylight sm:text-sm border border-gray-300 rounded-md"
               
                />
               
              </div>
            </div> 
        </div>
    )
}

export default TextArea
