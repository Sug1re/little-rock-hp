"use client";

import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import { SiteMap } from "./SiteMap";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { SnsBt } from "./SnsBt";
import Image from "next/image";

export const Footer = () => {
  const onTop = useScrollToTop();

  const year = new Date().getFullYear();
  return (
    <Box component="footer" sx={{ bgcolor: "grey.900", color: "#fff" }}>
      <Button
        component={Link}
        href="/"
        onClick={onTop}
        variant="contained"
        color="primary"
        disableRipple
        sx={{
          borderRadius: 0,
          width: "100%",
          bgcolor: "#602D1D",
        }}
      >
        トップへ戻る
      </Button>

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <Box
          sx={{
            height: { xs: "10vh", sm: "20vh" },
            width: { sm: "50vw" },
            display: "flex",
            flexDirection: {
              xs: "row",
              sm: "column",
            },
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Image
            src="/logo.jpg"
            alt="LittleRock"
            width={70}
            height={70}
            style={{
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
          <SnsBt />
        </Box>
        <Box sx={{ height: { xs: "25vh", sm: "20vh" }, width: { sm: "50vw" } }}>
          <SiteMap />
        </Box>
      </Box>

      <Box textAlign="center" sx={{ py: 6 }}>
        <Typography variant="body2">© 2023-{year} Little Rock</Typography>
      </Box>
    </Box>
  );
};
