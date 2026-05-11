import Link from "next/link";

import { Box, Button } from "@mui/material";
import {
  faInstagram,
  faTiktok,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SnsBt = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button
          component={Link}
          href="https://www.youtube.com/@little__rock_"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ m: 0, p: 0, minWidth: 0, lineHeight: 1 }}
        >
          <FontAwesomeIcon icon={faYoutube} style={{ fontSize: "28px" }} />
        </Button>
        <Button
          component={Link}
          href="https://www.instagram.com/little_._._rock?igsh=emRnZTZxN2Fwc3k5"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ m: 0, p: 0, minWidth: 0, lineHeight: 1 }}
        >
          <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "28px" }} />
        </Button>
        <Button
          component={Link}
          href="https://x.com/little__rock_?s=21&t=udQAt5SX7nQssa8CRpBkYg"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ m: 0, p: 0, minWidth: 0, lineHeight: 1 }}
        >
          <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: "28px" }} />
        </Button>
        <Button
          component={Link}
          href="https://www.tiktok.com/@little_._._rock?_r=1&_t=ZS-96BhP4aXqmj"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ m: 0, p: 0, minWidth: 0, lineHeight: 1 }}
        >
          <FontAwesomeIcon icon={faTiktok} style={{ fontSize: "28px" }} />
        </Button>
      </Box>
    </>
  );
};
