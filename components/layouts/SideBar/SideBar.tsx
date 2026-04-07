"use client";

import { Box, Drawer } from "@mui/material";
import {
  TicketIcon,
  CalendarDaysIcon,
  NewspaperIcon,
  UsersIcon,
  FlagIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { SideBarItem } from "./SideBarItem";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const SideBar = ({ open, onClose }: Props) => {
  return (
    <>
      <Drawer open={open} onClose={onClose}>
        <Box sx={{ width: "250px" }}>
          <SideBarItem title="ニュース" icon={<NewspaperIcon />} href="/news" />

          <SideBarItem
            title="Little Rockとは"
            icon={<TicketIcon />}
            href="/about"
          />

          <SideBarItem
            title="チケット予約"
            icon={<TicketIcon />}
            href="/ticket"
          />

          <SideBarItem
            title="スケジュール"
            icon={<CalendarDaysIcon />}
            href="/schedule"
          />

          <SideBarItem title="キャスト一覧" icon={<UsersIcon />} href="/cast" />

          <SideBarItem title="グッズ情報" icon={<FlagIcon />} href="/goods" />

          <SideBarItem
            title="会場アクセス"
            icon={<MapPinIcon />}
            href="/venue"
          />

          <SideBarItem
            title="お問い合わせ"
            icon={<EnvelopeIcon />}
            href="/contact"
          />
        </Box>
      </Drawer>
    </>
  );
};
