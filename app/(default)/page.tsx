export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Testimonials from '@/components/testimonials'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Features />
      <Zigzag />
     
    </>
  )
}
