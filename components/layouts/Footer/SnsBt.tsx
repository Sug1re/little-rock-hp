import Link from "next/link";

import { Box, Button } from "@mui/material";
import {
  faInstagram,
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
          href="https://youtube.com/your_account"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ m: 0, p: 0, minWidth: 0, lineHeight: 1 }}
        >
          <FontAwesomeIcon icon={faYoutube} style={{ fontSize: "28px" }} />
        </Button>
        <Button
          component={Link}
          href="https://instagram.com/your_account"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ m: 0, p: 0, minWidth: 0, lineHeight: 1 }}
        >
          <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "28px" }} />
        </Button>
        <Button
          component={Link}
          href="https://twitter.com/your_account"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ m: 0, p: 0, minWidth: 0, lineHeight: 1 }}
        >
          <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: "28px" }} />
        </Button>
      </Box>
    </>
  );
};
