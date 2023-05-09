import React, { useState, useRef, useEffect } from 'react'


function TestComponent() {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    }
    const [text, setText] = useState('bro bro')

    const [isInterSecting, setIsIntersecting] = useState(false)
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {

                setIsIntersecting(entry.isIntersecting);
            }, options
        );
        console.log(isInterSecting);
        console.log(observer)
        observer.observe(ref.current);
        // return () => observer.disconnect();

    }, [isInterSecting])
    return (
        <div  >
            <div className='firstDiv'>bro</div>
            <div ref={ref} className='secondDiv'>{text}</div>
            <div className='thirdDiv'>bro</div>
        </div>
    )
}

export default TestComponent
