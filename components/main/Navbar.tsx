import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow=[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a href='#about-me' className='h-auto w-auto flex flex-row item-center'>
          <img 
          src="/Navlogo.png"
          alt='logo'
          width={70}
          height={70} 
          className='curosor-pointer hover:animate-slowspin'
          
          />

        </a>

      </div>
    </div>
  )
}

export default Navbar