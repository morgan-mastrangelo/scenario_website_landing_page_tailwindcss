import React, { useEffect, useState,useRef } from 'react'


function Test() {
  const [isHidden, setIsHiden] = useState(false)
  const container = useRef(null);
  const movingDiv = useRef(null);

  const options = {
    root: container.current,
    rootMargin: "0px",
    threshold: 1
}
useEffect(() => {
  const observer1 = new IntersectionObserver(
      ([entry]) => {
          setIsHiden(entry.isIntersecting);
      },
      options
  )
  observer1.observe(movingDiv.current);

})
useEffect(()=>{
  if(!isHidden){
        console.log('bro bro')

  }
console.log(movingDiv.current.getBoundingClientRect().bottom)
  // console.log("container client height is "+container.current.clientHeight)
  // console.log("moving div pos is "+movingDiv.current.offsetTop)
  // if(movingDiv.current.offsetTop*2 >= container.current.clientHeight ){
  //   container.current.classList.add("bg-red-400")
  //   container.current.classList.remove("bg-green-600")
  // }
})


  return (
    <div className='px-6 py-9 h-[200vh]'>
            <div ref={container} className='relative overflow-hidden bg-green-600 h-[100vh]'>
               <div ref={movingDiv} className='absolute top-0 left-0 h-[50%] bg-pink-500 w-60 movingAnimation'></div>
            </div>
    </div>
  )
}

export default Test

    // .movingAnimation{
    //     animation-name: 'topToBottom';
    //     animation-duration: 4s;
    //     animation-fill-mode: forwards;
    //     animation-direction: normal;
    //     animation-iteration-count: 1;
    // }
    // @keyframes topToBottom {

    //     from {
    //         top: 0;
    //     }

    //     to {
    //         top: 100%;
    //     }
    // }