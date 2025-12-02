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
  Users
} from "lucide-react";

export const headerData = [
  { title: "Home", href: "/", side: "left" },

  {
    title: "About",
    href: "/about",
    side: "left",
    submenu: [
      { title: "About Us", href: "/about", icon: BookOpen },
      { title: "Gallery", href: "/gallery", icon: ImageIcon },
      { title: "FAQ", href: "/faq", icon: BadgeQuestionMark },
      { title: "Careers", href: "/careers", icon: Users },
    ],
  },

  {
    title: "Services",
    href: "/services",
    side: "left",
    submenu: [
      { title: "Copy & Print", href: "/services/copyprint", icon: Printer },
      { title: "Graphic Design", href: "/services/graphicdesign", icon: Palette },
      { title: "Signs & Banners", href: "/services/signsbanners", icon: ClipboardList },
      { title: "Business Essentials", href: "/services/businessessentials", icon: Stamp },
      { title: "Promotional Products", href: "/services/promotionalproducts", icon: Box },
      { title: "Blueprints / Large Format", href: "/services/blueprintslargeformat", icon: Ruler },
      { title: "Photo Restoration", href: "/services/photorestoration", icon: ImageIcon },
      { title: "FedEx Shipping", href: "/services/fedexshipping", icon: Package },
    ],
  },

  { title: "Locations", href: "/locations", side: "right" },
  { title: "Contact", href: "/contact", side: "right" },
];
