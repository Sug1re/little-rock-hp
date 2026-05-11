import {
  faInstagram,
  faTiktok,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const snsLinks = {
  x: {
    name: "X",
    href: "https://x.com/little__rock_?s=21&t=udQAt5SX7nQssa8CRpBkYg",
    icon: faXTwitter,
  },

  instagram: {
    name: "Instagram",
    href: "https://www.instagram.com/little_._._rock?igsh=emRnZTZxN2Fwc3k5",
    icon: faInstagram,
  },

  youtube: {
    name: "YouTube",
    href: "https://www.youtube.com/@little__rock_",
    icon: faYoutube,
  },

  tiktok: {
    name: "TikTok",
    href: "https://www.tiktok.com/@little_._._rock?_r=1&_t=ZS-96BhP4aXqmj",
    icon: faTiktok,
  },
} as const;