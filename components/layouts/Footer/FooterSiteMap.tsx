"use client";

import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { siteMap } from "./types/siteMap";

export const FooterSiteMap = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 2,
          mx: 2,
        }}
      >
        {siteMap.map((section) => (
          <Box key={section.title}>
            <Typography variant="h6" gutterBottom>
              {section.title}
            </Typography>

            {section.links.map((link) => (
              <Typography
                key={link.href}
                component={Link}
                href={link.href}
                sx={{
                  display: "block",
                  color: "grey.400",
                  textDecoration: "none",
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
        ))}
      </Box>
    </>
  );
};
