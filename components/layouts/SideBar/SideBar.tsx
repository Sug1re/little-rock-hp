"use client";

import { Box, Drawer } from "@mui/material";
import {
  faBagShopping,
  faCalendarDays,
  faEnvelope,
  faMapLocationDot,
  faNewspaper,
  faTicket,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { SideBarItem } from "./SideBarItem";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const SideBar = ({ open, onClose }: Props) => (
  <>
    <Drawer open={open} onClose={onClose}>
      <Box sx={{ width: "250px" }}>
        <SideBarItem title="ニュース" icon={faNewspaper} href="/news" />

        <SideBarItem title="Little Rockとは" icon={faTicket} href="/about" />

        <SideBarItem title="チケット予約" icon={faTicket} href="/ticket" />

        <SideBarItem
          title="スケジュール"
          icon={faCalendarDays}
          href="/schedule"
        />

        <SideBarItem title="キャスト一覧" icon={faUserGroup} href="/cast" />

        <SideBarItem title="グッズ情報" icon={faBagShopping} href="/goods" />

        <SideBarItem
          title="会場アクセス"
          icon={faMapLocationDot}
          href="/venue"
        />

        <SideBarItem title="お問い合わせ" icon={faEnvelope} href="/contact" />
      </Box>
    </Drawer>
  </>
);
