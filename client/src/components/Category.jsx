import React from 'react'
import {useParams} from 'react-router-dom'
import categories from '../utils/categories'
import Filter from './Filter'
import Navbar from "./Navbar"
import MobileFilter from './MobileFilter'

const Category = () => {
    const {categoryName} = useParams()
    const data = [
        {
            id: 1,
            name: 'Medium'
        },
        {
            id: 2,
            name: 'Large'
        },
        {
            id: 3,
            name: 'Small'
        },
        {
            id: 4,
            name: 'Extra small'
        },
    ]
    const products = categories;
  return (
    <div className="">
			<Navbar />
      <h1 className='text-center text-lg p-4 font-semibold'>{categoryName}</h1>
      <div className="mx-auto max-w-7xl">
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilter sizes={data} colors={data} />
            <div className="hidden lg:block">
              <Filter
                valueKey="sizeId" 
                name="Sizes" 
                data={data}
              />
              <Filter 
                valueKey="colorId" 
                name="Colors" 
                data={data}
              />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {/* {products.length === 0 && <NoResults />} */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item, index) => (
                  <div key={index} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
                    {/* Image & actions */}
                    <div className="rounded-xl bg-gray-100 relative">
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="object-center rounded-md w-full"
                        />
                    </div>
                    {/* Description */}
                    <div>
                        <p className="font-semibold text-lg">{item.name}</p>
                    </div>
                    <div>Shop Now</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category