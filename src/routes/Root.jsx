import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import { Box } from "@mui/material";
import { DRAWER_WIDTH } from "../constants/drawerConstants";

export default function Root() {
  return (
    <Box sx={{ display:{ sm: "flex" }}}>
      <ResponsiveDrawer />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3, 
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
