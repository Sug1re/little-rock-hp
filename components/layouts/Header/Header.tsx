"use client";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import {
  faBars,
  faCalendarDays,
  faNewspaper,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { HeaderBt } from "./HeaderBt";
import { SideBar } from "../SideBar/SideBar";

import { useDisclosure } from "@mantine/hooks";
import { useHeaderScroll } from "./hooks/useHeaderScroll";

export const Header = () => {
  const { show } = useHeaderScroll();
  const [isOpen, handlers] = useDisclosure(false);

  return (
    <>
      <Box sx={{}}>
        <AppBar
          position="fixed"
          sx={{
            transition: "transform 0.3s ease",
            transform: show ? "translateY(0)" : "translateY(-50%)",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 0,
              minHeight: "auto",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ height: "8vh", display: "flex", alignItems: "center" }}
              >
                LittleRock
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <HeaderBt title="ニュース" icon={faNewspaper} href="/news" />
              <HeaderBt title="LittleRockとは" icon={faTicket} href="/about" />
              <HeaderBt title="チケット予約" icon={faTicket} href="/ticket" />
              <HeaderBt
                title="スケジュール"
                icon={faCalendarDays}
                href="/schedule"
              />
              <HeaderBt
                title="メニュー"
                icon={faBars}
                onClick={handlers.open}
              />
            </Box>
          </Toolbar>
        </AppBar>

        <SideBar open={isOpen} onClose={handlers.close} />
      </Box>
      ;
    </>
  );
};
