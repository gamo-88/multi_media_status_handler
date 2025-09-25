import { UserPlus, Store, Home, CircleFadingPlus, MessagesSquare, type LucideProps } from "lucide-react";

export type MenuItemType = {

    title: string
    url: string
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    select: boolean
}

export const menuItems: MenuItemType[]= [
      {
    title: "Stories",
    url: "/stories",
    icon: CircleFadingPlus,
    select: true,
  },
  {
    title: "Market",
    url: "/market",
    icon: Store,
    select: false,
  },
  {
    title: "Friends",
    url: "/friends",
    icon: UserPlus,
    select: false,
  },
  {
    title: "Feeds",
    url: "/feeds",
    icon: Home,
    select: false,
  },
  {
    title: "Discussions",
    url: "/discussions",
    icon: MessagesSquare,
    select: false,
  }
]