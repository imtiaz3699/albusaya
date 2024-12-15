import { Box, InputLabel } from '@mui/material'
import React from 'react'
import CustomSelect from '../CustomSelect/CustomSelect'

function ModalSelect({label,required}) {
  const style = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: "60px",
  };
  const styleSelect = { maxWidth: "500px", width: "100%", }; 
  const ageOptions = [
    { value: 10, label: "Ten" },
    { value: 20, label: "Twenty" },
    { value: 30, label: "Thirty" },
  ];
  return (
    <Box sx={style}>
        <Box style={{ maxWidth: "217px", width: "100%" }}>
          <InputLabel  variant = 'modalLabel'>
          {label} {
            required && <span style={{ color: "red" }}>*</span>
          } 
          </InputLabel>
        </Box>
        <CustomSelect options={ageOptions} style={styleSelect} />
      </Box>
  )
}

export default ModalSelect