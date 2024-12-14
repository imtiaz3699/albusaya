import { Button } from '@mui/material'
import React from 'react'

function CustomButton({variant,start,end,color,btnText,width,onClick}) {
  return (
    <Button sx = {{width:width,fontSize:'15px',fontWeight:500}} onClick = {onClick} variant = {variant} color = {color} startIcon={start} endIcon={end} >{btnText}</Button>
  )
}

export default CustomButton