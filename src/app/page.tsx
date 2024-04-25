'use client'
import { sendGAEvent } from '@next/third-parties/google'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <button
        onClick={() => {
          alert('button_clicked')
          sendGAEvent({ event: 'buttonClicked', value: 'click' })
        }}
      >
        Send Event
      </button>
    </main>
  )
}
