import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Test } from './test-component'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Test />
      <small
        style={{ display: 'block', textAlign: 'center', paddingTop: '20px' }}>
        <pre>
          <strong>Version: </strong>
          {process.env.npm_package_version}
        </pre>
      </small>
    </main>
  )
}
