"use client";

import {
  Box,
  Button,
  Container,
  Snackbar,
  Tooltip,
  Typography,
} from "@mui/material";
import colors from "../utils/colors.util";
import { ShareOutlined } from "@mui/icons-material";
import { copyUrl } from "@/utils/copyUrl";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      paddingY={2}
      borderBottom={1}
      borderColor={colors.border}
      marginBottom={2}
    >
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center">
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
          <Tooltip title="Copy link to this dashboard">
            <Button
              variant="outlined"
              startIcon={<ShareOutlined />}
              onClick={() => {
                copyUrl();
                setOpen(true);
              }}
            >
              Share
            </Button>
          </Tooltip>
        </Box>
      </Container>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        message="Copied link for this dashboard"
      />
    </Box>
  );
}
