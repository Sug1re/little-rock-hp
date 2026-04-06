import Link from "next/link";
import { Box, MenuItem, Typography } from "@mui/material";

type Props = {
  title: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export const HeaderBt = ({ title, icon, href, onClick }: Props) => {
  return (
    <>
      <MenuItem
        component={href ? Link : "li"}
        href={href}
        onClick={onClick}
        disableRipple
        sx={{
          p: 0,
          height: "8vh",
          width: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#fff",
          ":hover": {
            color: "#000",
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
              width: "2.5rem",
              height: "2.5rem",
            },
          }}
        >
          {icon}
        </Box>

        <Typography
          sx={{
            height: "3vh",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            fontSize: "0.75rem",
          }}
        >
          {title}
        </Typography>
      </MenuItem>
    </>
  );
};
