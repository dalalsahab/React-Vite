import React from 'react'
import {ArrowUpRight} from 'lucide-react'

const LeftContent = () => {
  return (
    <div className='h-full w-1/4 px-10 py-10 flex flex-col justify-between'>
    <div >
        <h1 className='text-5xl font-bold'>
            Main heading 
        </h1>
        <p className='py-5 text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis velit rem dicta a quae et.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id natus, nemo aliquid cum aut esse, explicabo asperiores laudantium quidem possimus quam repellendus quia eos necessitatibus similique voluptatibus nihil fugiat sed.
        </p>
    </div>
    <div >
        <ArrowUpRight className="w-15 h-15 text-black"/>
    </div>
    
    </div>
  )
}

export default LeftContent
