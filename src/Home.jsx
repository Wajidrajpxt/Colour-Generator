import React, { useState } from 'react'

export default function Home() {

  const [Hex,setHex]  = useState("#ffffff")

  const random = ()=>{

    const randomColor = "#" + Math.floor(Math.random() * 167772125).toString(16)
   
   
    setHex(randomColor)
  }
  return (
    <>

    <div className=' w-[100%] flex justify-around items-center flex-col' style={{backgroundColor:`${Hex}`,minHeight:"100vh", overflow:'hidden'}}>
          <div className='h-auto text-[50px] font-semibold w-[100%] flex justify-center ' >
          <h1>{Hex}</h1>

          </div>


        <button onClick={random} className='h-[60px] w-[250px] bg-[green] text-xl'>Randomize</button>
      
        <button onClick={()=>navigator.clipboard.writeText(Hex)}  className='h-[60px] w-[250px] bg-[red] text-xl'>Copy Color</button>
      
      
      
      
      </div> 
    

    
    
    
    
    </>
  )
}
