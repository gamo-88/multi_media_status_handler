import { Outlet } from "react-router";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "./components/ui/sidebar";
import SidebarApp from "./components/core/SidebarApp";
import HeaderApp from "./components/core/HeaderApp";

export default function App() {
	return (
		<>
			<SidebarProvider>
				<SidebarApp variant="inset" />
				<SidebarInset>
          <HeaderApp/>
					<main className="p-2">
						<SidebarTrigger />
						<Outlet />
					</main>
				</SidebarInset>
			</SidebarProvider>
		</>
	);
}

