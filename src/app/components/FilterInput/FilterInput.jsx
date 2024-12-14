import { Box, Input, InputLabel } from "@mui/material";
import React from "react";

function FilterInput({ labelText, placeholder }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <InputLabel shrink variant="searchFieldLabel">
        {labelText}
      </InputLabel>

      <Input fullWidth variant="filterInput" placeholder={placeholder} />
    </Box>
  );
}

export default FilterInput;
