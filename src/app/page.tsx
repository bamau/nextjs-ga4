'use client'
import { sendGAEvent } from '@next/third-parties/google'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <button
        onClick={() => {
          sendGAEvent({ event: 'buttonClicked', value: 'click', debug_mode: true })
          console.log('Log - sendGAEvent:', sendGAEvent)
          alert('button_clicked')
        }}
      >
        Send Event
      </button>
    </main>
  )
}
