import React from "react";
import { InputLabel } from "@mui/material";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";

function ModalInputWithLabel({ label, required }) {
  const style = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: "60px",
  };
  const inputStyles = {
    maxWidth: "500px",
    width: "100%",
    height:'38px'
  };

  return (
    <Box sx={style}>
      <Box style={{ maxWidth: "217px", width: "100%" }}>
        <InputLabel variant = 'modalLabel'>
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </InputLabel>
      </Box>
      <TextField sx={inputStyles}  />
    </Box>
  );
}

export default ModalInputWithLabel;
