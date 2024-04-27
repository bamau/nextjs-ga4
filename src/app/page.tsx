'use client'

import { sendGA4Event } from '@/lib/helpers/ga4'
import { sendGAEvent } from '@next/third-parties/google'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <button
        onClick={() => {
          sendGA4Event({
            name: 'button_clicked',
            params: {
              button_text: 'Send Event',
            },
          })
          alert('button_clicked')
        }}
      >
        Send Event
      </button>
      <button
        onClick={() => {
          sendGAEvent('event', 'button_next_clicked', { value: 'button_next_clicked' })
          alert('button_next_clicked')
        }}
      >
        Send Next Event
      </button>
    </main>
  )
}
