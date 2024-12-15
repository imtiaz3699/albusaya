import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, Card, Typography } from "@mui/material";
import Image from "next/image";
import { componentSpacingStyles } from "@/app/theme/styles";
import { formatKeyNames } from "@/app/helpers/helpers";
function UserView() {
  const obj = {
    fullName: "Saleem Akhtar",
    role: "Administrator",
    phoneNumber: "+9711234567890",
    state: "State/Province",
    activeInactive: "Active",
    userType: "Global User",
    emailAddress: "saleemakhtar@gmail.com",
    country: "Dubai",
    city: "Agent",
    company: "Albusaya",
  };
  const leftGroup = {
    fullName: obj.fullName,
    role: obj.role,
    phoneNumber: obj.phoneNumber,
    state: obj.state,
    activeInactive: obj.activeInactive,
  };

  const rightGroup = {
    userType: obj.userType,
    emailAddress: obj.emailAddress,
    country: obj.country,
    city: obj.city,
    company: obj.company,
  };
  const images = {
    fullName: '/user.png', // Replace with actual image path
    role: '/user.png',
    phoneNumber: '/phone.png',
    state: '/home.png',
    activeInactive: '/shield-check.png',
    userType: '/user.png',
    emailAddress: '/mail.png',
    country: '/globe.png',
    city: '/map-pin.png',
    company: '/building.png',
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Card
        sx={{
          borderRadius: "10px",
          border: "1.5px",
          borderColor: "#2F2B3D26",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid container>
          <Grid sx={{ height: "298px", width: "100%", position: "relative" }}>
            <Box
              style={{ width: "100%", height: "200px", position: "relative" }}
            >
              <Image
                src="/bannr.png" // Path to your image
                alt=""
                layout="fill" // Makes the image fill the parent container
                objectFit="cover" // Ensures the image covers the container without distortion
                objectPosition="center" // Centers the image
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "45%",
                left: "30px",
                display: "flex",
                alignItems: "end",
                gap: "10px",
              }}
            >
              <Box>
                <div className="w-[125px] h-[125px] rounded-[6px] p-2 bg-[#FFFFFF] shadow-xl relative">
                  <div className="w-full h-full relative rounded-[15px]  ">
                    <Image
                      src="https://randomuser.me/api/portraits/men/1.jpg" // Path to your image
                      alt=""
                      layout="fill" // Makes the image fill the parent container
                      objectFit="cover" // Ensures the image covers the container without distortion
                      objectPosition="center" // Centers the image
                    />
                  </div>

                  <div className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF] flex justify-center items-center absolute top-5 -right-5">
                    <img
                      src="/camerapic.png"
                      alt=""
                      className="w-[17px] h-[15px]"
                    />
                  </div>
                </div>
              </Box>
              <Typography variant="h1">Saleem Akhtar</Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
      <Card
        sx={{
          borderRadius: "10px",
          border: "1.5px",
          borderColor: "#2F2B3D26",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="flex flex-col gap-[20px]">
          <div className="bg-[#104774] w-full h-[9px]"></div>
          <Box
            sx={{
              ...componentSpacingStyles.justifyBetween,
              paddingX: "30px",
            }}
          >
            <Typography variant = 'fontGrayDark18'>General Information Edit</Typography>
            <Box>
              <Button variant="outlined" color="primary">
                Edit
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              ...componentSpacingStyles.justifyBetween,
              gap: "119px",
              width: "100%",
              paddingX: "30px",
              paddingBottom: "20px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {Object.entries(leftGroup).map(([key, value]) => (
                <div
                  key={key}
                  variant="body1"
                  className="flex flex-row items-center justify-between border-b-2 border-dashed pb-[10px]"
                >
                 <div className= 'flex flex-row items-center gap-[10px]'> 
                    <img src = {images[key]} className = 'w-[25px] h-[25px]' />
                    <Typography variant = 'fontGray16'>{formatKeyNames(key)}</Typography>
                    </div>
                  <Typography variant = 'fontGrayDark16'> {value}</Typography>
                </div>
              ))}
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {Object.entries(rightGroup).map(([key, value]) => (
                <div
                  key={key}
                  variant="body1"
                  className="flex flex-row items-center justify-between border-b-2 border-dashed pb-[10px]"
                >
                 <div className = 'flex flex-row items-center gap-[10px]'> 
                 <img src = {images[key]} className = 'w-[25px] h-[25px]' />
                    <Typography variant = 'fontGray16' className = ''>{formatKeyNames(key)}</Typography></div>
                  <Typography variant = 'fontGrayDark16' className="text-start"> {value}</Typography>
                </div>
              ))}
            </Box>
          </Box>
        </div>
      </Card>

      
    </Box>
  );
}

export default UserView;
