import React from 'react'
import { MutatingDots } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='flex justify-center items-center pt-20'>
        <MutatingDots 
      height="100"
      width="100"
      color="#333"
      secondaryColor= '#B2B2B2'
      radius='12.5'
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      />
    </div>
  )
}

export default Loading