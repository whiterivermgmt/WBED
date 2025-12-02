import {
  Image as ImageIcon,
  FileText,
  Palette,
  Ruler,
  Package,
  Printer,
  Stamp,
  Box,
  ClipboardList,
  BadgeQuestionMark,
  BookOpen,
  Users,
  Radio,
} from "lucide-react";

export const headerData = [
  { title: "Home", href: "/", side: "left" },

  {
    title: "About",
    href: "/whatwedo", // not used as a button — hover opens submenu
    submenu: [
      { title: "What We Do", href: "/whatwedo", icon: BookOpen },
      { title: "Who We Are", href: "/whoweare", icon: Users },
      { title: "Advertise", href: "/advertise", icon: ClipboardList },
      { title: "FCC Public File", href: "https://publicfiles.fcc.gov/fm-profile/WBED", icon: Radio },
    ],
  },

  { title: "Shows", href: "/shows" },
  { title: "Events", href: "/events" },
  { title: "Contest", href: "/contest" },

  { title: "Contact", href: "/contact", side: "right" },
];
