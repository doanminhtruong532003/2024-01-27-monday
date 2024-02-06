import React from 'react'

const Loading: React.FC = () => {
  return (
    <section className='bg-applicationSurfce absolute w-full h-full  flex flex-col z-20 opacity-100'>
      <div className='w-full grow relative'>
        <div className='absolute bg-applicationSurfce z-0 inset-0 flex'></div>
        <div className='absolute z-10 top-12 bottom-0 inset-x-0 overflow-hidden justify-center items-center flex rounded-none'>
          <div className="w-64 h-full absolute z-30 left-0 top-0 box-border border-0 border-r-0 rounded-r-lg bg-applicationBackground"></div>
          <div className="ml-[264px] rounded-t-lg bg-applicationBackground w-full h-full mb-0 flex iteams-center justify-center">
            <div className='items-center mb-[150px] '>
              <img style={{verticalAlign:"middle", border:"0", marginTop:"36px"}} src="https://cdn.monday.com/images/loader/loader.gif" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Loading