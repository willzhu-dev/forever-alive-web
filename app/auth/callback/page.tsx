'use client'

import { useEffect } from 'react'

export default function CallbackPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    const code = params.get('code')

    if (code) {
      window.location.href = `/reset-password?code=${code}`
    } else {
      window.location.href = '/'
    }
  }, [])

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>Loading...</p>
    </main>
  )
}