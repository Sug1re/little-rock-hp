"use client";

import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { siteMap } from "./types/siteMap";

export const SiteMap = () => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 2,
          mx: 2,
          mt: 4,
        }}
      >
        {siteMap.map((link) => (
          <Typography
            key={link.href}
            component={Link}
            href={link.href}
            sx={{
              display: "block",
              color: "grey.400",
              textDecoration: "none",
              fontSize: "0.875rem",
              mb: 0.5,
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            {link.label}
          </Typography>
        ))}
      </Box>
    </>
  );
};
