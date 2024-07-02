import { closeCart } from '@/app/api/cartSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function CloseCartButton() {

    const dispatch = useDispatch()
  
    const clickHandler = (e: any) => {
        e.stopPropagation()
        dispatch(closeCart())
    }

    return (
      <div style={{flex: '1'}} onClick={clickHandler}/>
    )
}
