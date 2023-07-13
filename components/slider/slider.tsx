import Head from "next/head"
import React, { useState } from "react"
import stadium from "@/public/mobile/james-kirkup-kcNZIatyrps-unsplash.png"
import shirt from "@/public/mobile/braden-hopkins-Nlpn996Yksg-unsplash.png"
import shirt2 from "@/public/mobile/braden-hopkins-pjENIdeds5c-unsplash.png"
import stadium2 from "@/public/mobile/james-kirkup-vRp9YvR6Q1c-unsplash.png"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"

const slides = [
  {
    url: shirt.src,
  },
  {
    url: stadium2.src,
  },
  {
    url: stadium.src,
  },
  {
    url: shirt2.src,
  },
]

export function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstIndex = currentIndex === 0
    const newIndex = isFirstIndex ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastIndex = currentIndex === slides.length - 1
    const newIndex = isLastIndex ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <>
      <Head>
        <link rel='preload' as='image' href={stadium.src} />
        <link rel='preload' as='image' href={shirt.src} />
        <link rel='preload' as='image' href={shirt2.src} />
        <link rel='preload' as='image' href={stadium2.src} />
      </Head>
      <div className='max-w-[1440px] md:h-[600px] mt-4 md:w-1/2 h-screen w-full relative group'>
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
            backgroundSize: "cover",
            height: "100%",
            width: "100%",
          }}
          className='h-screen w-full rounded-xl bg-center bg-cover duration-500'
        ></div>
        <div
          onClick={prevSlide}
          className='lg:hidden lg:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-4 text-2xl rounded-full p-2 bg-slate-50 text-pink-500 cursor-pointer'
        >
          <BsChevronCompactLeft size={30} />
        </div>
        <div
          onClick={nextSlide}
          className='lg:hidden lg:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-4 text-2xl rounded-full p-2 bg-slate-50 text-pink-500 cursor-pointer'
        >
          <BsChevronCompactRight size={30} />
        </div>
      </div>
    </>
  )
}
