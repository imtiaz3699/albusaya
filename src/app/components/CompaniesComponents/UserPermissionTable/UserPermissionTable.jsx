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
import { Dashboard } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";

function UserPermissionTable() {
  const data = [
    {
      name: "Dashboard",
      view: "View Dashboard",
      add: "Add Dashboard",
      edit: "Edit Dashboard",
      delete: "Delete Dashboard",
      customPermissions: "Manage Dashboard Permissions",
      subKeys: [
        "Employees",
        "Advance Salary",
        "Driving License",
        "Employee Clearance",
        "Employee Information",
        "Employee Transfer Form",
        "Food Permit Deduction",
        "General Deduction",
        "Passport Acceptance",
        "Payroll",
        "Special Allowance",
        "Loan",
      ],
    },
    {
      name: "Employees",
      view: "View Employees",
      add: "Add Employees",
      edit: "Edit Employees",
      delete: "Delete Employees",
      customPermissions: "Manage Employee Permissions",
      subKeys: [
        "Employees",
        "Advance Salary",
        "Driving License",
        "Employee Clearance",
        "Employee Information",
        "Employee Transfer Form",
        "Food Permit Deduction",
        "General Deduction",
        "Passport Acceptance",
        "Payroll",
        "Special Allowance",
        "Loan",
      ],
    },
    {
      name: "Asset Allocation",
      view: "View Asset Allocation",
      add: "Add Asset Allocation",
      edit: "Edit Asset Allocation",
      delete: "Delete Asset Allocation",
      customPermissions: "Manage Asset Allocation Permissions",
      subKeys: [
        "Employees",
        "Advance Salary",
        "Driving License",
        "Employee Clearance",
        "Employee Information",
        "Employee Transfer Form",
        "Food Permit Deduction",
        "General Deduction",
        "Passport Acceptance",
        "Payroll",
        "Special Allowance",
        "Loan",
      ],
    },
    {
      name: "Asset Clearance",
      view: "View Asset Clearance",
      add: "Add Asset Clearance",
      edit: "Edit Asset Clearance",
      delete: "Delete Asset Clearance",
      customPermissions: "Manage Asset Clearance Permissions",
      customizedPermissions:[
        {
            dashboard:[
              'Request','Card Overview'
            ],
            employees:[
              'Add Employee','Export','Edit Details','Status','Copy Link'
            ],
            advanceSalary:[
              'Edit Details', 'On Hold','Delete Campaign',
            ],
            drivingLicense:[
              'Edit Details','On Hold', 'Delete Campaign','Status',
            ],
            employeClearance:[
              
            ]

        }
      ],
      subKeys: [
        "Employees",
        "Advance Salary",
        "Driving License",
        "Employee Clearance",
        "Employee Information",
        "Employee Transfer Form",
        "Food Permit Deduction",
        "General Deduction",
        "Passport Acceptance",
        "Payroll",
        "Special Allowance",
        "Loan",
      ],
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
          <Card sx={{ borderRadius: "20px" }}>
            <TableContainer>
              <Table sx={{ borderCollapse: "collapse" }}>
                <TableHead>
                  <TableRow
                    sx={{ backgroundColor: "#104774", borderBottom: "none" }}
                  >
                    <TableCell
                      sx={{
                        paddingY: "12px",
                        paddingX: "20px",
                        color: "#F2F2F2",
                        borderRight: "1px solid #ddd",
                      }}
                    >
                      Name
                    </TableCell>
                    <TableCell
                      sx={{
                        paddingY: "12px",
                        paddingX: "20px",
                        color: "#F2F2F2",
                        borderRight: "1px solid #ddd",
                      }}
                    >
                      View
                    </TableCell>
                    <TableCell
                      sx={{
                        paddingY: "12px",
                        paddingX: "20px",
                        color: "#F2F2F2",
                        borderRight: "1px solid #ddd",
                      }}
                    >
                      Add
                    </TableCell>
                    <TableCell
                      sx={{
                        paddingY: "12px",
                        paddingX: "20px",
                        color: "#F2F2F2",
                        borderRight: "1px solid #ddd",
                      }}
                    >
                      Edit
                    </TableCell>
                    <TableCell
                      sx={{
                        paddingY: "12px",
                        paddingX: "20px",
                        color: "#F2F2F2",
                        borderRight: "1px solid #ddd",
                      }}
                    >
                      Delete
                    </TableCell>
                    <TableCell
                      sx={{
                        paddingY: "12px",
                        paddingX: "20px",
                        color: "#F2F2F2",
                      }}
                    >
                      Custom Permissions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((element, idx) => {
                    return (
                      <TableRow key={idx}>
                        <TableCell sx={{ borderRight: "1px solid #ddd" }}>
                          <div className="flex flex-col w-[190px]">
                            <span>{element?.name}</span>
                            {element?.name === "Employees" && (
                              <div className="mt-[30px]">
                                {element?.subKeys?.map((subkey, idx) => {
                                  return (
                                    <div
                                      key={subkey}
                                      className="flex flex-row items-center gap-[10px] py-[15px] "
                                    >
                                      <div className="w-[8px] h-[8px] bg-[#104774] rounded-full"></div>
                                      <Typography variant="tableCell">
                                        {subkey}
                                      </Typography>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell sx={{ borderRight: "1px solid #ddd" }}>
                          <div className = 'w-[20px]'>{"  "}</div>
                          {element?.name === "Employees" && (
                            <div className="flex flex-col gap-[25px] justify-end mt-[30px] w-[20px]">
                              {element?.subKeys?.map((subkey, idx) => {
                                return (
                                    <Checkbox
                                    key = {idx}
                                      sx={{
                                        color: "black", // Unchecked color
                                        padding:'0px',
                                        "&.Mui-checked": {
                                          color: "#104774", // Checked color
                                        },
                                        "& .MuiSvgIcon-root": {
                                          fontSize: 25, // Change size of the checkbox icon
                                        },
                                      }}
                                    />
                                );
                              })}
                            </div>
                          )}
                        </TableCell>
                        <TableCell sx={{ borderRight: "1px solid #ddd" }}>
                        <div className = 'w-[20px]'>{"  "}</div>
                          {element?.name === "Employees" && (
                            <div className="flex flex-col gap-[25px] justify-end mt-[30px] w-[20px]">
                              {element?.subKeys?.map((subkey, idx) => {
                                return (
                                    <Checkbox
                                    key = {idx}
                                      sx={{
                                        color: "black", // Unchecked color
                                        padding:'0px',
                                        "&.Mui-checked": {
                                          color: "#104774", // Checked color
                                        },
                                        "& .MuiSvgIcon-root": {
                                          fontSize: 25, // Change size of the checkbox icon
                                        },
                                      }}
                                    />
                                );
                              })}
                            </div>
                          )}
                        </TableCell>
                        <TableCell sx={{ borderRight: "1px solid #ddd" }}>
                        <div className = 'w-[20px]'>{"  "}</div>
                          {element?.name === "Employees" && (
                            <div className="flex flex-col gap-[25px] justify-end mt-[30px] w-[20px]">
                              {element?.subKeys?.map((subkey, idx) => {
                                return (
                                    <Checkbox
                                    key = {idx}
                                      sx={{
                                        color: "black", // Unchecked color
                                        padding:'0px',
                                        "&.Mui-checked": {
                                          color: "#104774", // Checked color
                                        },
                                        "& .MuiSvgIcon-root": {
                                          fontSize: 25, // Change size of the checkbox icon
                                        },
                                      }}
                                    />
                                );
                              })}
                            </div>
                          )}
                        </TableCell>
                        <TableCell sx={{ borderRight: "1px solid #ddd" }}>
                        <div className = 'w-[20px]'>{"  "}</div>
                          {element?.name === "Employees" && (
                            <div className="flex flex-col gap-[25px] justify-end mt-[30px] w-[20px]">
                              {element?.subKeys?.map((subkey, idx) => {
                                return (
                                    <Checkbox
                                    key = {idx}
                                      sx={{
                                        color: "black", // Unchecked color
                                        padding:'0px',
                                        "&.Mui-checked": {
                                          color: "#104774", // Checked color
                                        },
                                        "& .MuiSvgIcon-root": {
                                          fontSize: 25, // Change size of the checkbox icon
                                        },
                                        "&.MuiButtonBase-root":{
                                          width:'20px'
                                        }
                                      }}
                                    />
                                );
                              })}
                            </div>
                          )}
                        </TableCell>
                        <TableCell>{element.customPermissions}</TableCell>
                      </TableRow>
                    );
                  })}
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
