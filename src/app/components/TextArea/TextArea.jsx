import { Box, InputLabel } from '@mui/material';
import React from 'react'
const style = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: "60px",
  };
function TextArea({label,required}) {
  return (
    <Box sx={style}>
      <Box style={{ maxWidth: "217px", width: "100%" }}>
        <InputLabel variant = 'modalLabel'>
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </InputLabel>
      </Box>
      <textarea placeholder='Description' className = 'w-full p-2 border-[1px] border-[#D9D9D9] rounded-[6px]' />
    </Box>
  )
}

export default TextArea
