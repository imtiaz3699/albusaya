import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import {Checkbox, Box, Pagination, Stack, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";


const columns = [
  {
    date: "DATE",
    fullName: "FULL NAME",
    country: "COUNTY",
    city: "CITY",
    phoneNumber: "PHONE NUMBER",
    role: "ROLE",
    action: "ACTION",
  },
];
const rows = [
  {
    id: 1,
    date: "2024-12-09",
    fullName: {
      name: "John Doe",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    email: "johndoe@example.com",
    country: "USA",
    city: "New York",
    phoneNumber: "(123) 456-7890",
    role: "Admin",
    action: "Edit",
  },
  {
    id: 2,
    date: "2024-12-08",
    fullName: {
      name: "Jane Smith",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    email: "janesmith@example.com",
    country: "Canada",
    city: "Toronto",
    phoneNumber: "(987) 654-3210",
    role: "User",
    action: "Delete",
  },
  {
    id: 3,
    date: "2024-12-07",
    fullName: {
      name: "Robert Brown",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    email: "robertbrown@example.com",
    country: "UK",
    city: "London",
    phoneNumber: "(555) 123-4567",
    role: "Manager",
    action: "View",
  },
  {
    id: 4,
    date: "2024-12-06",
    fullName: {
      name: "Emily Clark",
      profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    email: "emilyclark@example.com",
    country: "Australia",
    city: "Sydney",
    phoneNumber: "(444) 567-8901",
    role: "Admin",
    action: "Edit",
  },
  {
    id: 5,
    date: "2024-12-05",
    fullName: {
      name: "Michael Lee",
      profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    email: "michaellee@example.com",
    country: "Germany",
    city: "Berlin",
    phoneNumber: "(333) 234-5678",
    role: "User",
    action: "Delete",
  },
  {
    id: 6,
    date: "2024-12-04",
    fullName: {
      name: "Sarah Wilson",
      profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    email: "sarahwilson@example.com",
    country: "France",
    city: "Paris",
    phoneNumber: "(222) 345-6789",
    role: "Manager",
    action: "View",
  },
];

const rowStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
};

function CustomTable() {
  return (
    <Box>
      <TableContainer component={Paper} sx={{ overflowY: "auto" }}>
        <Table sx={{ minWidth: "100%" }} aria-label="simple table">
          <TableHead >
            {columns?.map((element, dix) => (
              <TableRow key={element.date} sx={{ overflow: "auto" }}>
                <TableCell align="left">
                  <Checkbox/>
                </TableCell>
                <TableCell align="left">
                  <Box sx={rowStyle}>
                    {element?.date}
                    <Image src="/filter.png" width={14.34} height={14} alt="" />
                  </Box>
                </TableCell>

                <TableCell align="left" sx={rowStyle}>
                  <Box sx={rowStyle}>
                    {element.fullName}
                    <Image src="/filter.png" width={14.34} height={14} alt="" />
                  </Box>
                </TableCell>

                <TableCell align="left">
                  <Box sx={rowStyle}>
                    {element?.country}
                    <Image src="/filter.png" width={14.34} height={14} alt="" />
                  </Box>
                </TableCell>

                <TableCell align="left">
                  <Box sx={rowStyle}>
                    {element?.city}
                    <Image src="/filter.png" width={14.34} height={14} alt="" />
                  </Box>
                </TableCell>

                <TableCell align="left">
                  <Box sx={rowStyle}>
                    {element?.phoneNumber}
                    <Image src="/filter.png" width={14.34} height={14} alt="" />
                  </Box>
                </TableCell>

                <TableCell align="left">
                  <Box sx={rowStyle}>
                    {element?.role}
                    <Image src="/filter.png" width={14.34} height={14} alt="" />
                  </Box>
                </TableCell>

                <TableCell align="right">{element?.action}</TableCell>
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="left">
                  <Checkbox/>
                </TableCell>
                <TableCell align="left" >
                  {row.date}
                </TableCell>
                <TableCell align="left">
                  <Box
                    sx={{ display: "flex", flexDirection: "row",alignItems:'center', gap: "16px" }}
                  >
                    <Image src={row?.fullName?.profileImage} width={34} height={34} style = {{borderRadius:'100%'}} alt = 'Prfile Picture' />{" "}
                    <span style={{ display: "flex", flexDirection: "column" }}>
                      {" "}
                      <Typography variant = 'tableCellName'>
                      {row.fullName.name}
                      </Typography>
                      <Typography variant = 'tableCellEmail'>
                      {row.email}
                      </Typography>
                    </span>
                  </Box>
                </TableCell>
                <TableCell align="left">{row.country}</TableCell>
                <TableCell align="left">{row.city}</TableCell>
                <TableCell align="left">{row.phoneNumber}</TableCell>
                <TableCell align="left">{row.role}</TableCell>
                <TableCell align="right">
                  <MoreVertIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingX: "24px",
          paddingY: "21px",
        }}
      >
        <Typography sx={{ color: "#2F2B3D66", text: "15px", leading: "22px" }}>
          Showing 1 to 10 of 50 entries
        </Typography>
        <Stack spacing={2}>
          <Pagination count={10} variant="contained" shape="rounded" />
        </Stack>
      </Box>
    </Box>
  );
}

export default CustomTable;
