/* eslint-disable react/prop-types */
import React from 'react'

// eslint-disable-next-line react/prop-types
const Filter = ({name, data}) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">
        {name}
      </h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
             <button
                className={
                    `
                    w-auto 
                    font-medium
                    rounded-lg
                    bg-white
                    text-black
                    border
                    border-gray-400
                    px-2
                    py-1
                    disabled:cursor-not-allowed 
                    disabled:opacity-50
                    hover:opacity-75
                    transition
                `
                }
                type='button'
                >
                    {filter.name}
                </button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Filter