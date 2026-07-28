"use client";

import { AppBar, Box, Toolbar } from "@mui/material";
import {
  faBars,
  faNewspaper,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { faFlag as faFlagRegular } from "@fortawesome/free-regular-svg-icons";
import { HeaderBt } from "./HeaderBt";
import { SideBar } from "../SideBar/SideBar";

import { useDisclosure } from "@mantine/hooks";
import { useHeaderScroll } from "./hooks/useHeaderScroll";
import { ticketLinks } from "@/constants/externalLinks/ticket";
import Image from "next/image";

export const Header = () => {
  const { show } = useHeaderScroll();
  const [isOpen, handlers] = useDisclosure(false);

  return (
    <>
      <Box>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            transition: "transform 0.3s ease",
            transform: show ? "translateY(0)" : "translateY(-50%)",
            bgcolor: "#602D1D",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "column",
              pt: 1,
              minHeight: "auto",
            }}
          >
            <Image
              src="/logo.jpg"
              alt="LittleRock"
              width={70}
              height={70}
              style={{
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <HeaderBt title="ニュース" icon={faNewspaper} href="/news" />

              <HeaderBt title="LittleRockとは" icon={faTicket} href="/about" />

              <HeaderBt
                title="チケット予約"
                icon={faTicket}
                href={ticketLinks.ticket.href}
                target="_blank"
                rel="noopener noreferrer"
              />

              <HeaderBt title="公演一覧" icon={faFlagRegular} href="/stage" />

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
    </>
  );
};
