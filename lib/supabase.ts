'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function ResetPasswordPage() {

  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const exchangeCode = async () => {

      const params = new URLSearchParams(window.location.search)

      const code = params.get('code')

      if (!code) return

      const { error } =
        await supabase.auth.exchangeCodeForSession(code)

      if (error) {
        setMessage('链接已失效')
      }
    }

    exchangeCode()

  }, [])

  async function updatePassword() {

    setLoading(true)

    const { error } =
      await supabase.auth.updateUser({
        password
      })

    if (error) {
      setMessage(error.message)
    } else {
      setMessage('密码修改成功')
    }

    setLoading(false)
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          width: 400
        }}
      >

        <h1>Reset Password</h1>

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={{
            width:'100%',
            padding:'12px',
            marginTop:'20px'
          }}
        />

        <button
          onClick={updatePassword}
          style={{
            marginTop:'20px',
            width:'100%',
            padding:'12px'
          }}
        >
          {loading ? 'Updating...' : 'Update Password'}
        </button>

        <p>{message}</p>

      </div>
    </main>
  )
}