import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = {
  title: string;
  icon: IconDefinition;
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
              fontSize: {
                xs: "30px",
                sm: "35px",
              },
            },
          }}
        >
          <FontAwesomeIcon icon={icon} />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};
