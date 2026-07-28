import Link from "next/link";
import { Box, MenuItem, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = {
  title: string;
  icon: IconDefinition;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
};

export const HeaderBt = ({
  title,
  icon,
  href,
  onClick,
  target,
  rel,
}: Props) => {
  return (
    <MenuItem
      component={href ? Link : "li"}
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      disableRipple
      sx={{
        p: 0,
        mt: 1.5,
        mb: 0.5,
        height: "8vh",
        width: { xs: "70px", sm: "120px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
        ":hover": {
          color: "#FF784D",
          backgroundColor: "transparent",
        },
      }}
    >
      <Box
        sx={{
          height: "5vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "& svg": {
            fontSize: {
              xs: "30px",
              sm: "35px",
            },
          },
        }}
      >
        <FontAwesomeIcon icon={icon} />
      </Box>

      <Typography
        sx={{
          height: "3vh",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          fontSize: { xs: "0.6rem", sm: "1rem" },
        }}
      >
        {title}
      </Typography>
    </MenuItem>
  );
};
