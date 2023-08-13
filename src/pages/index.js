'use client'
import Image from 'next/image'
import { useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'

const images = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg"
]
export default function Home() {

  return (
    <main
      className={`flex min-h-screen`}
    >
     <div className='h-[175vh] bg-[rgba(45,45,45)] flex gap-4 p-4 box-border'>
        <Column images={[images[0], images[1], images[2]]} />
        <Column images={[images[3], images[4], images[5]]} />
        <Column images={[images[6], images[7], images[8]]} />
        <Column images={[images[9], images[10], images[11]]} />
     </div>
    </main>
  )
}

const Column = ({images}) => {
  return (
    <div className='relative w-[25%] h-full flex flex-col gap-2 min-w-[250px]'>
      {
        images.map((src, index) => {
          return (
            <div key={index} className='w-full h-full relative rounded-xl overflow-hidden'>
              <Image src={`/${src}`} fill alt="image" className="object-cover" />
            </div>
          );
        })
      }
    </div>
  )
}
