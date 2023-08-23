'use client'
import Spline from '@splinetool/react-spline'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'


export default function Home() {
    useEffect(() => {
        // gsap.registerPlugin(ScrollTrigger)
        // ScrollTrigger.defaults({
        //     toggleActions: 'restart pause resume pause',
        //     scroller: '.scroll-container'
        // })
        // gsap.from('.scroll-container', {
        //     scrollTrigger: '.scroll-container',
        //     xPercent: -100,
        // })

        // gsap.from('airpods', {
        //     scrollTrigger: 'airpods',
        //     xPercent: -100,

        // })
        // gsap.from('.scroll-item', {
        //     scrollTrigger: '.scroll-section',
        //     xPercent: -100
        // })

        // gsap.from('.scroll-section', {
        //     xPercent: -100,
        //     ease: 'power2.inOut',
        //     scrollTrigger: {
        //         trigger:  '.scroll-container',
        //         scrub: 0.5,
        //         pin: '.airpods',
        //         start: 'top top',
        //         end: '+=200',
        //         snap: 1 / 3 // numSections - 1
        //     }
        // })
    }, [])


    return (
        <main className='w-screen h-full grid grid-cols-2'>
            <div className='bg-black text-white h-screen w-full p-[3rem]'>
                <h1 className='font-bold text-[3rem]'>Airpods Pro Image</h1>
            </div>
            <div className='w-full h-screen overflow-y-scroll'>
                <div className='h-screen w-full p-[3rem]'>
                    <h1 className='font-bold text-[3rem]'>Airpods Pro Image</h1>
                </div>
                <div className='h-screen w-full p-[3rem]'>
                    <h1 className='font-bold text-[3rem]'>Airpods Pro Image</h1>
                </div>
                <div className='h-screen w-full p-[3rem]'>
                    <h1 className='font-bold text-[3rem]'>Airpods Pro Image</h1>
                </div>
            </div>
        </main>
    )
}
