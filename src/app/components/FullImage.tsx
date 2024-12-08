import React from 'react'
import Image from 'next/image';

const FullImage = () => {
  return (
    <div className='w-full'>
      <Image src="/Image/full.svg" alt="Full Image" width={1300} height={1300} />
    </div>
  )
}

export default FullImage;
