"use client";
import { Label } from "@mui/icons-material";
import {
  Box,
  Input,
  InputLabel,
  TextField,
  Typography,
  Item,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import React from "react";
import FilterInput from "../FilterInput/FilterInput";
import { styled } from "@mui/material/styles";
function Filters() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: "100%", // Ensure the Grid container takes full width
        flexWrap: "wrap", // Ensure items wrap correctly
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Grid width = '32%'>
      <FilterInput labelText={"Name"} placeholder={"Name"} />
      </Grid>
      <Grid width = '32%'>
      <FilterInput labelText={"Name"} placeholder={""} />
      </Grid>
      <Grid width = '32%'>
      <FilterInput labelText={"Name"} placeholder={""} />
      </Grid>
      <Grid container spacing={2}></Grid>
    </Grid>
  );
}

export default Filters;
