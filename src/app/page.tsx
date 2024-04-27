'use client'

import { sendGA4Event } from '@/lib/helpers/ga4'

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
    </main>
  )
}
