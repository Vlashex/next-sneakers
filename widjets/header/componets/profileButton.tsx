"use client"
import { Link } from '@mui/material'
import NextLink from 'next/link'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '@/lib/slices/authSlice';

export default function ProfileButton() {

    const user = useSelector(selectUser)

  return (
    <Link component={NextLink} href={!!user?'/Profile':'/LogIn'} underline='none' sx={{width:'20px', height: '20px'}}><AccountCircleOutlinedIcon/></Link>
  )
}
