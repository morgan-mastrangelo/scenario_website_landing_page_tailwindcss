import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState, useRef } from 'react'
const options = {
  root:null,
  rootMargin: "0px",
  threshold: 0.5
}

function App2() {

  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      options
    );
    console.log(options)
    console.log(isIntersecting);
    observer.observe(ref.current);

    // return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.add("slide-in");
      });
    } else {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("slide-in");
      });
    }
  }, [isIntersecting]);

  return (
    <div className='bg-mainGray '>
      <header>This is the Header</header>
      <main ref={ref}>
        <div className="child-one">Child One</div>
        <div className="child-two">Child Two</div>
      </main>
      <footer>This is the Footer</footer>

    
    </div>
  );
}

export default App2;
