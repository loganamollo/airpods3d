'use client'
import Spline from '@splinetool/react-spline'
import { useEffect, useRef } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'


export default function Home() {
    return (
        <main className='w-screen h-full relative'>
            <div className='z-0 h-screen px-8 bg-gradient-to-b from-teal-100 to-fuchsia-200'>
                <h1 className='font-bold text-[11rem] leading-[-2rem]'>Airpods Pro</h1>
                <p className='text-[2rem]'>Sounds like a <br /> live performance.</p>
                {/* <FaArrowDown size={32} className='mx-auto mt-10' /> */}
            </div>
            <div className='h-screen w-[80vw]  z-10 absolute top-0 right-0  p-0'>
                <Spline scene="https://prod.spline.design/MM8img0rXgwWIhfy/scene.splinecode" />
            </div>
        </main>
    )
}
