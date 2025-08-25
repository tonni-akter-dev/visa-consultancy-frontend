import React from 'react'
import ImmigrationTab from './ImmigrationTab'

const ImmigrationService = () => {
  return (
    <div style={{
      backgroundImage: "url('https://www.immigration.gov.fj/wp-content/uploads/2023/10/Background-tapa-mix-1.svg')",
    }}>
      <div className='max-w-[1230px] mx-auto py-8'>
        <h3 className='text-[#101B3B] font-semibold text-[40px] mb-5'>Immigration Services</h3>
        <div>
          <ImmigrationTab/>
        </div>
      </div>

    </div>
  )
}

export default ImmigrationService