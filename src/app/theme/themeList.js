import { Padding } from "@mui/icons-material";

export const dataGridStyles = {
  styleOverrides: {
    root: {
      border: "0px solid #1976d2", // Change border color
      fontSize: "13px", // Change font size for entire grid
      color: "#2F2B3DE5",
      lineHeight: "24px",
      fontWeight: 500,
    },
    columnHeaders: {
      // Column header styles
      backgroundColor: "#80839014",
      color: "red", // Header text color
      fontSize: "18px", // Header font size
      "& .MuiDataGrid-columnSeparator": {
        display: "none", // Hide column separators
      },
    },
    row: {
      // Row styles
      "&:nth-of-type(odd)": {
        backgroundColor: "#f9f9f9", // Alternate row background
      },
      "&:hover": {
        backgroundColor: "#f1f1f1", // Row hover effect
      },
    },
    cell: {
      // Cell styles
      color: "#333", // Text color
      fontSize: "15px", // Cell font size
      borderBottom: "1px solid #ddd", // Cell border
      "&:focus": {
        outline: "none", // Remove focus outline
      },
    },
    footerContainer: {
      // Footer container styles
      backgroundColor: "#1976d2", // Footer background
      color: "#fff", // Footer text color
    },
    toolbarContainer: {
      // Toolbar customization
      backgroundColor: "#f0f0f0",
      borderBottom: "1px solid #ddd",
    },
  },
};

export const pagination = {
  MuiPagination: {
    styleOverrides: {
      root: {
        backgroundColor: "#f0f0f0",
      },
    },
  },
  MuiPaginationItem: {},
};
export const paginationItem = {
  styleOverrides: {
    root: {
      "&.Mui-selected": {
        backgroundColor: "#104774",
        color: "#fff",
      },
    },
  },
};

export const table = {
  styleOverrides: {
    root: {
    },
  },
};

export const tableCell = {
  styleOverrides: {
    root: {
      paddingBottom:'24px',
      paddingTop:'24px',
      fontSize: "14px",
    },
    head: {
      backgroundColor: "#80839014",
      color: "#2F2B3DE5",
      fontWeight: 700,
      lineHeight:'24px',

    },
  },
};
