"use client";
import { createTheme } from "@mui/material";
import {
  dataGridStyles,
  pagination,
  paginationItem,
  table,
  tableCell,
} from "./themeList";
export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#23567F",
    },
    secondary: {
      main: "#F8F7FA",
    },
    warning: {
      main: "rgba(134,130,222,0.8)",
    },
    error: {
      main: "#2fd334",
    },
    info: {
      main: "#0eaeff",
    },
    text: {
      primary: "#2F2B3DE5",
      secondary: "#2F2B3DB2",
      hover: "#104774",
      textGray: "#BDBDBD",
    },
  },

  typography: {
    fontSize: 32,
    fontWeightLight: 400,
    fontWeightMedium: 500,
    fontWeightSemibold: 600,
    fontWeightBold: 700,
    htmlFontSize: 35,
    h1: {
      fontSize: 25,
      fontWeight: 700,
      lineHeight: 1.23,
    },
    h2: {
      fontSize: 15,
      fontWeight: 500,
      lineHeight: "22px",
      color: "#2F2B3DE5",
    },
    fontGray16: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "400",
      color: "#2F2B3D99",
    },

    fontGrayDark16: {
      fontSize: "16px",
      lineHeight: "18px",
      color: "#2F2B3DE5",
      fontWeight: 500,
    },
    fontGrayDark18: {
      fontSize: "18px",
      lineHeight: "21.15px",
      color: "#2F2B3D",
      fontWeight: 600,
    },
    tableCell: {
      fontSize: "14px",
      lineHeight: "22px",
      fontWeight: "400",
      color: "#2F2B3DE5",
    },
    tableCellName: {
      color: "#2F2B3DE5",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "22px",
    },
    tableCellEmail: {
      color: "#2F2B3DB2",
      fontWeight: 400,
      fontSize: "13px",
      lineHeight: "20px",
    },
    pagination: {
      fontSize: 15,
      fontWeight: 400,
    },

    button: {
      fontSize: 15,
      fontWeight: 500,
      lineHeight: 1.89,
    },
    caption: {
      fontSize: 15,
      fontWeight: 500,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          // Default styles for all Typography variants
        },
      },
      variants: [
        {
          props: { variant: "customTitle" },
          style: {
            fontSize: "20",
            fontWeight: 500,
            lineHeight: 1.5,
            letterSpacing: "0.1em",
            color: "#4B465C",
          },
        },
        {
          props: { variant: "customSubtitle" },
          style: {
            fontSize: "20px",
            fontWeight: 600,
            color: "#104774",
          },
        },
        {
          props: { variant: "modalTabHead" },
          style: {
            fontSize: "12px",
            fontWeight: 600,
            color: "#2F2B3DE5",
            lineHeight: "22px",
          },
        },
        {
          props: { variant: "modalTabCaption" },
          style: {
            fontSize: "10px",
            fontWeight: 400,
            color: "#2F2B3DB2",
            lineHeight: "20px",
          },
        },
      ],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "6px", // Custom border radius
          backgroundColor: "#FCFCFC",
          height: "38px",
          width: "100%",

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2F2B3D40", // Default border color
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#104774", // Border color on hover
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#104774", // Border color when focused
          },
        },
        input: {
          color: "#2F2B3D", // Custom text color
          "::placeholder": {
            fontSize: "13px", // Placeholder text size
            color: "#2F2B3D66", // Optional: Change placeholder color
          },
        },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: "filterInput" },
          style: {
            color: "#FF5733", // Custom color for this variant
            fontSize: "1.2rem", // Larger font size
            fontWeight: "bold", // Bold text
          },
        },
      ],
    },
    MuiInputBase: {
      variants: [
        {
          props: { variant: "filterInput" },
          style: {
            padding: "10px",
            color: "#333",
          },
        },
      ],
    },
    MuiInput: {
      variants: [
        {
          props: { variant: "filterInput" },
          style: {
            borderRadius: "8px",
            border: "1px solid #2F2B3D38",
            height: "38px",
            width: "100%",
            backgroundColor: "#fff",
            "&:hover": {
              borderColor: "#888",
            },
            "&.Mui-focused": {
              borderColor: "#3f51b5",
              boxShadow: "0 0 5px rgba(63, 81, 181, 0.5)",
            },
            "& input": {
              fontSize: "16px", // Ensure input text size matches root
              lineHeight: "1.5",
              color: "#2F2B3DE5",
            },
            "& input::placeholder": {
              fontSize: "15px", // Placeholder font size
              color: "#2F2B3D66", // Placeholder color
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            border: "1px solid #000",
            borderRadius: "8px",
            padding: "10px",
            backgroundColor: "#f5f5f5",
            "&:hover": {
              backgroundColor: "#e0e0e0",
            },
            "&.Mui-focused": {
              borderColor: "#3f51b5",
              boxShadow: "0 0 5px rgba(63, 81, 181, 0.5)",
            },
          },
        },
      ],
      // Override default styles
      styleOverrides: {
        root: {
          border: "1px solid #ccc", // Default border style
          borderRadius: "4px", // Default border radius
          height: "36px", // Default height
          padding: "0 12px", // Default padding
          backgroundColor: "#fafafa", // Default background color
          "&:hover": {
            borderColor: "#999",
          },
          "&.Mui-focused": {
            borderColor: "#3f51b5",
            boxShadow: "0 0 5px rgba(63, 81, 181, 0.5)",
          },
        },
        underline: {
          "&:before": {
            borderBottom: "none", // Remove default underline
          },
          "&:after": {
            borderBottom: "none", // Remove active underline
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "none", // Remove underline on hover
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: "6px", // Custom border radius
          backgroundColor: "#FCFCFC",
          height: "38px",
          width: "100%",
          color: "#2F2B3D", // Custom text color
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2F2B3D40", // Default border color
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#104774", // Border color on hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#104774", // Border color when focused
          },
        },
        icon: {
          color: "#2F2B3D", // Custom color for dropdown arrow
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#2F2B3DE5", // Label color
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "16px",
          "&.Mui-focused": {
            color: "#23567F", // Label color when focused
          },
        },
      },
      variants: [
        {
          props: { variant: "searchFieldLabel" },
          style: {
            color: "#2F2B3DE5", // Custom color for this variant
            fontSize: 15, // Larger font size
            fontWeight: 500, // Bold text
            lineHeight: 1.5,
          },
        },
        {
          props: { variant: "modalLabel" },
          style: {
            color: "#2F2B3DE5", // Custom color for this variant
            fontSize: 16, // Larger font size
            fontWeight: 600, // Bold text
            lineHeight: 1.5,
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px", // Default border radius
          textTransform: "none", // Disable uppercase text
          width: "100%",
          fontSize: 15,
          fontWeight: 500,
          lineHeight: 1.89,
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: "#104774",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#1d4563",
            },
          },
        },
        {
          props: { variant: "contained", color: "modalButton" },
          style: {
            backgroundColor: "#737682",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#737682",
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: "#104774",
            color: "#104774",
            "&:hover": {
              backgroundColor: "#214d70",
              color: "white",
            },
          },
        },
        {
          props: { variant: "contained", color: "error" },
          style: {
            backgroundColor: "#FF4C51",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#d32f2f", // Darker red for hover
            },
          },
        },
        {
          props: { variant: "contained", color: "gray" },
          style: {
            backgroundColor: "#80839029",
            color: "#808390",
          },
        },
        {
          props: { variant: "outlined", color: "error" },
          style: {
            borderColor: "#FF4C51",
            color: "red",
            "&:hover": {
              backgroundColor: "rgba(255, 0, 0, 0.1)", // Light red background on hover
            },
          },
        },
      ],
    },
    MuiDataGrid: dataGridStyles,
    MuiPaginationItem: paginationItem,
    MuiPagination: pagination,
    MuiTableCell: tableCell,
    MuiTable: table,
  },
});
