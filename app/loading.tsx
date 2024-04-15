"use client";

import { Box, Typography, CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <Box
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={3}
    >
      <CircularProgress size="26px" color="inherit" thickness={6} />
      <Typography>Please wait</Typography>
    </Box>
  );
}
