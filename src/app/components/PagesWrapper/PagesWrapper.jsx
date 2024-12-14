import { Box, Breadcrumbs, Divider } from "@mui/material";
import React from "react";
import SharedHeader from "../SharedHeader/SharedHeader";

function PagesWrapper({ children }) {
  return (
    <Box
      sx={{
        background: "#F8F7FA",
        margin: "10px",
        borderRadius: "30px",
        width: "100%",
        paddingRight: "25px",
        paddingLeft: "25px",
        paddingBottom: "25px",
        
      }}
      
    >
      <Box className = 'thin-scrollbar' sx = {{overflow:'auto',display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%',}}>
        {children}
      </Box>
    </Box>
  );
}

export default PagesWrapper;
