"use client"
import React, { ReactElement } from 'react'
import { useRouter } from 'next/navigation'


export default function Layout({children}: {children: ReactElement}) {

  const router = useRouter()
  const stopIt = (e:any) => {
    e.stopPropagation()
  }

  return (
    <div style={{
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0, .87)',
      zIndex: '100'
  }}
  onClick={()=>router.replace('/')}>
    <div
        onClick={stopIt}
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            background: '#fff', 
            width: '100%', 
            maxWidth: '600px',
            zIndex: '1000',
            padding: '100px 70px',
            textAlign: 'center',
            borderRadius: '15px'
        }}>
          {children}
        </div>
  </div>
  )
}
