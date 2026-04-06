"use client";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import {
  TicketIcon,
  CalendarDaysIcon,
  NewspaperIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
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
            height: "16vh",
            transition: "transform 0.3s ease",
            transform: show ? "translateY(0)" : "translateY(-50%)",
          }}
        >
          <Toolbar sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ height: "8vh", display: "flex", alignItems: "center" }}
              >
                Little Rock
              </Typography>
            </Box>

            <Box sx={{ display: "flex" }}>
              <HeaderBt
                title="ニュース"
                icon={
                  <NewspaperIcon
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  />
                }
                href="/news"
              />

              <HeaderBt
                title="Little Rockとは"
                icon={
                  <TicketIcon style={{ width: "2.5rem", height: "2.5rem" }} />
                }
                href="/about"
              />

              <HeaderBt
                title="チケット予約"
                icon={
                  <TicketIcon style={{ width: "2.5rem", height: "2.5rem" }} />
                }
                href="/ticket"
              />

              <HeaderBt
                title="スケジュール"
                icon={
                  <CalendarDaysIcon
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  />
                }
                href="/schedule"
              />

              <HeaderBt
                title="メニュー"
                icon={
                  <Bars3Icon style={{ width: "2.5rem", height: "2.5rem" }} />
                }
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
