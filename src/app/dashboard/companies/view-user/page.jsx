import UserPermissionTable from "@/app/components/CompaniesComponents/UserPermissionTable/UserPermissionTable";
import UserView from "@/app/components/CompaniesComponents/UserView/UserView";
import SharedHeader from "@/app/components/SharedHeader/SharedHeader";
import { Box, Breadcrumbs, Card, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

function ViewUser() {
  return (
    <div style={{ width: "100%" }}>
      <Grid container spacing={2} width={"100%"}>
        <Grid item xs={12} width={"100%"}>
          <SharedHeader />
        </Grid>
        <Divider sx = {{width:'100%'}}  />
        <Grid item width={"100%"}>
            <UserView/>
        </Grid>
        <Grid item  width={'100%'}>
            <UserPermissionTable/>
        </Grid>
      </Grid>
    </div>
  );
}

export default ViewUser;
