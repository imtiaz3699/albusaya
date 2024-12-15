import {
  Box,
  Button,
  Divider,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";
import ModalInputWithLabel from "../ModalInputWithLabel/ModalInputWithLabel";
import ModalSelect from "../ModalInputWithLabel/ModalSelectWithLabel";
const style = {
  display: "flex",
  flexDirection: "row",
  //   justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  gap: "60px",
};
const inputStyles = {
  maxWidth: "500px",
  width: "100%",
};
const ageOptions = [
  { value: 10, label: "Ten" },
  { value: 20, label: "Twenty" },
  { value: 30, label: "Thirty" },
];
const styleSelect = { maxWidth: "500px", width: "100%" };
function AddUser({isModalOpen,setIsModalOpen}) {
  return (
    <Grid container justifyContent={"start"} gap={"10px"} className = 'thin-scrollbar'>
      <Grid item sm={12} width={"100%"}>
        <Typography>Add Users</Typography>
        <Divider />
      </Grid>
      <Grid item>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              height: "100px",
              background: "#E9EAEC",
              border: "1px",
              borderRadius: "10px",
            }}
          >
            <Image src="/camera.png" width={27} height={27} alt="" />
          </Box>
          <Button variant="contained" color="primary">
            Upload Logo{" "}
            <Image src="/uploadicon.png" width={16} height={16} alt="" />{" "}
          </Button>
        </Box>
      </Grid>

      <ModalSelect label="User Type" required={true} />
      <ModalSelect label="Role" required={true} />
      <ModalInputWithLabel label="Full Name" required={true} />
      <ModalInputWithLabel label="Email Address" required={true} />
      <Box sx={style}>
        <Box style={{ maxWidth: "217px", width: "100%" }}>
          <InputLabel variant = 'modalLabel'>
            Phone Number <span style={{ color: "red" }}>*</span>{" "}
          </InputLabel>
        </Box>

        <Box
          style={{
            maxWidth: "500px",
            width: "100%",
            height: "38px",
            // border: "1px solid #2F2B3D40",
            borderRadius: "8px",
            // backgroundColor:'#FCFCFC',
            display: "flex",
            flexDirection: "row",
          }}
        >
          <input
            style={{
              width: "50px",
              border: "1px solid #2F2B3D40",
              borderTopLeftRadius: "8px",
              borderBottomLeftRadius: "8px",
            }}
          />
          <input
            style={{
              width: "100%",
              maxWidth: "450px",
              border: "1px solid #2F2B3D40",
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
            }}
          />
        </Box>
      </Box>
      <ModalSelect label="Country" required={true} />
      <ModalSelect label="State/Province" required={true} />
      <ModalSelect label="City" required={true} />
      <ModalSelect label="City" required={true} />
      <ModalSelect label="Status" required={true} />
      <ModalSelect label="Company" required={true} />
    <div style = {{width:'100%',height:'1px',backgroundColor:"#2F2B3D40"}}></div>

      <Box
        sx={{
          display: "flex",
          gap: "10px",
          width:'100%',
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Button
            onClick={() => setIsModalOpen(false)}
            variant="outlined"
            color="error"
            sx={{
              flexShrink: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <CancelIcon fontSize="20px" /> Cancel
          </Button>
          </Box>
        
        <Box >
          <Button
            variant="contained"
            color="primary"
            sx={{ display: "flex", gap: "4px" }}
          >
            Next <DoneIcon fontSize="10px" />
          </Button>
        </Box>
      </Box>


    </Grid>
  );
}

export default AddUser;
