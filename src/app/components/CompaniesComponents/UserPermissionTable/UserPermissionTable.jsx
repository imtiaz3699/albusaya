import {
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { componentSpacingStyles } from "@/app/theme/styles";
import CustomButton from "../../CustomButton/CustomButton";
import LanguageIcon from "@mui/icons-material/Language";
function UserPermissionTable() {
    const data = [
        {
          name: 'Dashboard',
          view: 'View Dashboard',
          add: 'Add Dashboard',
          edit: 'Edit Dashboard',
          delete: 'Delete Dashboard',
          customPermissions: 'Manage Dashboard Permissions',
        },
        {
          name: 'Employees',
          view: 'View Employees',
          add: 'Add Employees',
          edit: 'Edit Employees',
          delete: 'Delete Employees',
          customPermissions: 'Manage Employee Permissions',
        },
        {
          name: 'Asset Allocation',
          view: 'View Asset Allocation',
          add: 'Add Asset Allocation',
          edit: 'Edit Asset Allocation',
          delete: 'Delete Asset Allocation',
          customPermissions: 'Manage Asset Allocation Permissions',
        },
        {
          name: 'Asset Clearance',
          view: 'View Asset Clearance',
          add: 'Add Asset Clearance',
          edit: 'Edit Asset Clearance',
          delete: 'Delete Asset Clearance',
          customPermissions: 'Manage Asset Clearance Permissions',
        },
      ];
  return (
    <Box sx={{ width: "100%", marginTop: "10px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography variant="fontGrayDark18" sx={{ marginTop: "10px" }}>
          Role & Permissions
        </Typography>
        <Box sx={{ ...componentSpacingStyles.justifyBetween, gap: "10px" }}>
          <Box
            sx={{
              ...componentSpacingStyles.row,
              backgroundColor: "#1047741A",
              paddingX: "10px",
              paddingY: "8px",
              borderRadius: "8px",
              gap: "20px",
              width: "auto",
            }}
          >
            <CustomButton
              variant={"contained"}
              color="primary"
              start={<LanguageIcon />}
              btnText="Global Permissions"
            />
            <CustomButton
              start={<img src="/companypermission.png" />}
              btnText="Global Permissions"
              color="gray"
            />
          </Box>
          <Box>
            <Button variant="outlined" color="primary">
              Edit
            </Button>
          </Box>
        </Box>

        <Box>
            <Card sx = {{borderRadius:'20px'}}>
          <TableContainer>
            <Table sx={{ borderCollapse: 'collapse' }}>
              <TableHead >
                <TableRow sx = {{backgroundColor:'#104774', borderBottom: 'none'}} >
                  <TableCell sx = {{paddingY:'12px',paddingX:'20px',color:'#F2F2F2',borderRight: '1px solid #ddd'}}>
                         Name
                  </TableCell>
                  <TableCell sx = {{paddingY:'12px',paddingX:'20px',color:'#F2F2F2',borderRight: '1px solid #ddd'}}>
                         View
                  </TableCell>
                  <TableCell sx = {{paddingY:'12px',paddingX:'20px',color:'#F2F2F2',borderRight: '1px solid #ddd'}}>
                         Add
                  </TableCell>
                  <TableCell sx = {{paddingY:'12px',paddingX:'20px',color:'#F2F2F2',borderRight: '1px solid #ddd'}}>
                         Edit
                  </TableCell>
                  <TableCell sx = {{paddingY:'12px',paddingX:'20px',color:'#F2F2F2',borderRight: '1px solid #ddd'}}>
                         Delete
                  </TableCell>
                  <TableCell sx = {{paddingY:'12px',paddingX:'20px',color:'#F2F2F2'}}>
                         Custom Permissions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
               {
                data?.map((element,idx)=> {
                    return <TableRow key = {idx} >
                    <TableCell sx = {{borderRight: '1px solid #ddd'}}>
                      {element?.name}
                    </TableCell>
                    <TableCell sx = {{borderRight: '1px solid #ddd'}}>
                      {element?.view}
                    </TableCell>
                    <TableCell sx = {{borderRight: '1px solid #ddd'}}>
                      {element?.add}
                    </TableCell>
                    <TableCell sx = {{borderRight: '1px solid #ddd'}}>
                      {element?.edit}
                    </TableCell>
                    <TableCell sx = {{borderRight: '1px solid #ddd'}}>
                    {element?.delete}
                    </TableCell>
                    <TableCell>
                      {element.customPermissions}
                    </TableCell>
                  </TableRow>
                })
               } 
              </TableBody>
            </Table>
          </TableContainer>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default UserPermissionTable;
