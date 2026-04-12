"use client";

import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import {
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterSiteMap } from "./FooterSiteMap";
import { useScrollToTop } from "./hooks/useSchollToTop";

export const Footer = () => {
  const onTop = useScrollToTop();
  return (
    <Box component="footer" sx={{ bgcolor: "grey.900", color: "#fff" }}>
      <Button
        component={Link}
        href="/"
        onClick={onTop}
        variant="contained"
        color="primary"
        disableRipple
        sx={{ width: "100%" }}
      >
        トップへ戻る
      </Button>

      <FooterSiteMap />

      <Box
        sx={{
          height: "10vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body2">LittleRockのロゴ</Typography>
        <Box>
          <Button
            component={Link}
            href="https://youtube.com/your_account"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} style={{ fontSize: "30px" }} />
          </Button>
          <Button
            component={Link}
            href="https://instagram.com/your_account"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "30px" }} />
          </Button>
          <Button
            component={Link}
            href="https://twitter.com/your_account"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: "30px" }} />
          </Button>
        </Box>
      </Box>
      <Box mt={4} textAlign="center" sx={{ py: 6 }}>
        <Typography variant="body2">
          © 2023 Little Rock. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};
