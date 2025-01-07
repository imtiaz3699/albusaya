import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
function EmptyComponent({heading,description,isModalOpen,setIsModalOpen,btnText}) {
  return (
    <Grid container justifyContent="center" alignItems="center" height={"100%"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Image src="/objectsimage.png" width={425} height={345} alt="" />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
         {
            heading && <Typography variant="customSubtitle">
            {heading}
          </Typography>
         } 
         {
            description && <Typography variant="caption">
            {description}
          </Typography>
         } 
        </Box>

        <Button
          style={{ maxWidth: "169px" }}
          variant="contained"
          color="primary"
          onClick={() => setIsModalOpen(true)}
        >
          <AddIcon /> {btnText}
        </Button>
      </Box>
    </Grid>
  );
}

export default EmptyComponent;
