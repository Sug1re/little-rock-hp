import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";

type Props = {
  title: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export const SideBarItem = ({ title, icon, href, onClick }: Props) => {
  return (
    <ListItem disablePadding sx={{ height: "80px" }}>
      <ListItemButton
        component={href ? Link : "li"}
        href={href}
        onClick={onClick}
        disableRipple
        sx={{
          height: "100%",
          color: "#000",
          ":hover": {
            color: "#ff0000",
            backgroundColor: "transparent",
          },
        }}
      >
        <ListItemIcon
          sx={{
            color: "inherit",
            "& svg": {
              width: "2.5rem",
              height: "2.5rem",
            },
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};
