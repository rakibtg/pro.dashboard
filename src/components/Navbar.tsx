"use client";

import { Box, Container, Typography } from "@mui/material";
import colors from "../utils/colors.util";

export default function Navbar() {
  return (
    <Box
      paddingY={2}
      borderBottom={1}
      borderColor={colors.border}
      marginBottom={2}
    >
      <Container maxWidth="lg">
        <Typography
          fontWeight="bold"
          letterSpacing={2}
          fontSize={16}
          textTransform="uppercase"
          sx={{ cursor: "pointer", textDecoration: "none" }}
          component={"a"}
          href="/"
          color={colors.brand}
        >
          Pro.ai
        </Typography>
      </Container>
    </Box>
  );
}
