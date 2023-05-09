import React, { useEffect, useRef, useState } from 'react'



function Content4() {
    const [isInterSecting1, setIsIntersecting1] = useState(false);
    const [isInterSecting2, setIsIntersecting2] = useState(false);
    const [stepper1AnimationEnd, setStepper1AnimationEnd] = useState(false);

    const ref1 = useRef(null);
    const ref2 = useRef(null);


    const hider1 = useRef(null);
    const hider2 = useRef(null);
    const refStepper1 = useRef(null);


    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1
    }


    useEffect(() => {
        const stepper1Rect = refStepper1.current;
        const hider1Rect = hider1.current;

        const animationEnd = () => {
            const stepper1Bottom = stepper1Rect.getBoundingClientRect().bottom;
            const hider1Bottom = hider1Rect.getBoundingClientRect().bottom;

            if (hider1Bottom > stepper1Bottom) {
                // animation ends here I mean the child div passes the parent div
                setStepper1AnimationEnd(true)
            }

        }

        hider1Rect.addEventListener("animationend", animationEnd)

        return () => {
            hider1Rect.removeEventListener("animationend", animationEnd);
        };
    })


    useEffect(() => {
        const observer1 = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting1(entry.isIntersecting);
            },
            options
        )
        const observer2 = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting2(entry.isIntersecting);
            },
            options
        )
        observer1.observe(ref1.current)
        observer2.observe(ref2.current)


    })
    useEffect(() => {

        if (isInterSecting1) {
            hider1.current.classList.add("moveFromTop")
        }

        if (stepper1AnimationEnd && isInterSecting2) {
            hider2.current.classList.add("moveFromTop")
        }

    })


    return (
        <>
            {/* main container */}
            <div className='relative '>
                {/* stepper  */}
                <div className='absolute top-[0%] left-0 flex flex-col items-center  w-full h-[100%]  '>

                    <div className='flex flex-col items-center p-0 h-[75%] mt-[12.5%] '>
                        <div ref={ref1} className='w-6 h-6 bg-blue-600 rounded-full'></div>

                        <div ref={refStepper1} className='w-2 relative overflow-hidden h-[50%] bgStepper brobro'>
                            <div ref={hider1} className='bg-gray-500 h-[100%] absolute top-0 left-0 w-full'></div>
                        </div>

                        <div ref={ref2} className='w-6 h-6 bg-blue-600 rounded-full'></div>


                        <div className='w-2 relative overflow-hidden h-[50%] bgStepper'>
                            <div ref={hider2} className='bg-gray-500 h-[100%] absolute top-0 left-0 w-full'></div>
                        </div>

                        <div className='w-6 h-6 bg-blue-600 rounded-full'>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col bg-transparent gap-y-16'>
                    {/* step 1 */}
                    <div className='relative'>
                        <div className='relative grid grid-cols-1 sm:gap-y-10 md:gap-y-0 md:px-12 lg:px-16 md:grid-cols-2'>
                            <div className='absolute flex flex-col items-center justify-center w-full h-full text-center '>

                            </div>
                            <div className='flex flex-col px-2 md:px-4 lg:px-10 justify-self-center '>
                                <img src={require("../resources/step_1_image.png")} className='w-[400px] h-[400px]  ' alt="" />
                            </div>
                            <div className='flex flex-col px-10 md:px-8 lg:px-12 xl:px-24'>
                                <div className='px-12 py-16 bg-white rounded-xl'>
                                    <div className='py-3'>
                                        <button className='px-4 py-2 text-2xl font-bold text-white bg-yellow-500 rounded-3xl'>Step 1</button>
                                    </div>
                                    <div>

                                        <h1 className='pb-3 text-5xl font-bold text-gray-900'>Choose a set of visuals</h1>
                                        <p className='text-lg'>Pick and upload your own training data: characters, props, vehicles, weapons, skins, buildings, concept art, pixel art, sketches, etc.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='sm:hidden absolute top-[50%] flex flex-col items-center justify-center w-full h-full text-center'>
                            <div className='w-5 h-5 bg-black rounded-full'></div>

                            <div className='w-1 h-full bg-red-600'></div>
                            {/* <div>

                                    <div className='w-2 h-[calc(114px)] bg-green-600'></div>
                                </div> */}
                        </div>
                        <div className='sm:hidden absolute top-[100%] flex flex-col items-center justify-center w-full h-full text-center'>
                            <div className='w-1 h-40 bg-red-600'></div>

                        </div>
                    </div>


                    {/* step 2 */}
                    <div className='relative grid items-center grid-cols-1 gap-y-10 md:px-12 lg:px-16 md:grid-cols-2'>
                        <div className='sm:hidden absolute top-[50%] flex flex-col items-center justify-center w-full h-full text-center'>
                            <div className='w-5 h-5 bg-black rounded-full'></div>
                            <div className='w-1 h-full bg-red-600'></div>
                        </div>
                        <div className='flex flex-col px-10 md:px-8 lg:px-12 xl:px-24'>
                            <div className='px-12 py-16 bg-white rounded-xl'>
                                <div className='py-3'>
                                    <button className='px-4 py-2 text-2xl font-bold text-white bg-yellow-600 rounded-3xl'>Step 2</button>
                                </div>
                                <div>

                                    <h1 className='pb-3 text-5xl font-bold text-gray-900'>Train bespoke AI models</h1>
                                    <p className='text-lg text-gray-900'>Create your own generative AI engines, in a few clicks. 100% online; no technical skill required.</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex flex-col px-10 md:px-8 lg:px-24 '>
                    <img src={require("../resources/step_2_iamge.gif")} className='md:w-[450px] md:h-[450px]  h-[300px] w-[300px] rounded-xl ' alt="" />
                </div> */}
                        <div className='flex flex-col px-2 md:px-8 lg:px-12 xl:px-24 justify-self-center '>
                            <img src={require("../resources/step_2_iamge.gif")} className='md:w-[450px] md:h-[450px]  h-[300px] w-[300px] rounded-xl ' alt="" />
                        </div>
                    </div>

                    {/* step 3 */}
                    <div className='relative grid grid-cols-1 gap-y-10 md:px-12 lg:px-16 md:grid-cols-2 '>
                        <div className='flex flex-col px-2 md:px-4 lg:px-10 justify-self-center '>
                            <img src={require("../resources/step_3_image.png")} className='w-[400px] h-[400px]  ' alt="" />
                        </div>
                        <div className='flex flex-col px-10 md:px-8 lg:px-12 xl:px-24'>
                            <div className='px-12 py-16 bg-white rounded-xl'>
                                <div className='py-3'>
                                    <button className='px-4 py-2 text-2xl font-bold text-white bg-blue-500 rounded-3xl'>Step 3</button>
                                </div>
                                <div>

                                    <h1 className='pb-3 text-5xl font-bold text-gray-900'>Generate outstanding assets</h1>
                                    <p className='text-lg'>Bring your ideas to life with just a few words. Assets creation has never been easier.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Content4

