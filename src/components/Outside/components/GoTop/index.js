import React, { useEffect, useState } from 'react'


const GoTop = (props) => {
  const [showTop , setShowTop] = useState(false)

  useEffect(() => {
    const scrollHandel = () => {
      if(window.scrollY > 400) {
        setShowTop(!showTop)
      }
      else {
        setShowTop(false)
      }
    }
    window.addEventListener("scroll",scrollHandel)
    return () => {
      window.removeEventListener("scroll",scrollHandel)
    }
  },[])
  
  return (
    <>
      { 
        showTop ? 
                  <div class="goTopShow">
                      <a href='#TOP'>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0065FF" stroke-width="1.5"><path d="M15.8337 7.08398L10.0003 12.9173L4.16699 7.08398" stroke="ỉnherit" stroke-width="inherit" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                      </a>    
                  </div>
        : 
                  <div class="goTopHidden">
                    <a href='#TOP'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0065FF" stroke-width="1.5"><path d="M15.8337 7.08398L10.0003 12.9173L4.16699 7.08398" stroke="ỉnherit" stroke-width="inherit" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </a>    
                  </div>
      }
    </>
  )
}

export default GoTop