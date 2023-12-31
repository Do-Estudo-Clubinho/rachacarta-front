import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="text-white grid grid-cols-[10%_90%] h-full">
      <div></div>
      <div className='grid grid-rows-[10%_90%]'>
        <header className='flex flex-col justify-end'>
          <h1 className='font-bold text-4xl w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#E54818] to-[#FF7F00]'>RachaFrete</h1> 
          {/*  */}
        </header>
        {children}
      </div>
    </div>
  )
}
