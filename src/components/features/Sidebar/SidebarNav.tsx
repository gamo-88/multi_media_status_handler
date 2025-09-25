import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { MenuItemType } from "./MenuItems";
import { Link, useLocation } from "react-router";
import clsx from "clsx";
export default function SidebarNav({ items }: { items: MenuItemType[] }) {
	const location = useLocation();
	const currentLocation = location.pathname;

	return (
		<SidebarGroup>
			<SidebarGroupContent className="flex flex-col gap-2">
				{/*
				<SidebarMenu>
					 <SidebarMenuItem className="flex items-center gap-2">
						<SidebarMenuButton
							tooltip="Quick Create"
							className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
						>
							<AlarmClockCheck />
							<span>Quick Create</span>
						</SidebarMenuButton>
						<Button
							size="icon"
							className="size-8 group-data-[collapsible=icon]:opacity-0"
							variant="outline"
						>
							<Mail />
							<span className="sr-only">Inbox</span>
						</Button>
					</SidebarMenuItem> 
				</SidebarMenu>
                */}
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton
								asChild
								className={clsx(
									"py-5 text-lg font-medium",
									item.url === currentLocation
										? "bg-purple-300 hover:bg-purple-300 "
										: ""
								)}
							>
								<Link to={item.url}>
									<item.icon />
									<span>{item.title}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
