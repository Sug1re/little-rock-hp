import Link from "next/link";

import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { snsLinks } from "@/constants/externalLinks/sns";

export const SnsBt = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        {Object.entries(snsLinks).map(([key, sns]) => (
          <Link
            key={key}
            href={sns.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={sns.icon} style={{ fontSize: "28px" }} />
          </Link>
        ))}
      </Box>
    </>
  );
};
