/* eslint-disable react/prop-types */
import { React, useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import Filter from "./Filter";


const MobileFilter = ({sizes, colors}) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <button
        onClick={onOpen}
        className="w-auto font-medium rounded-lg bg-white text-black border border-gray-400 px-2 py-1 disabled:cursor-not-allowed  disabled:opacity-50 hover:opacity-75 transition lg:hidden flex items-center gap-x-2"
        type='button'
        >
          Filters <Plus size={20} />
        </button>

      <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
        
        {/* Background color and opacity */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        
        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            
            {/* Close button */}
            <div className="flex items-center justify-end px-4">
              <X size={15} onClick={onClose} />
            </div>

            <div className="p-4">
              <Filter
                valueKey="sizeId" 
                name="Sizes" 
                data={sizes}
              />
              <Filter 
                valueKey="colorId" 
                name="Colors" 
                data={colors}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}

export default MobileFilter