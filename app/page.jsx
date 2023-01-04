import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Test } from './test-component'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Test />
    </main>
  )
}