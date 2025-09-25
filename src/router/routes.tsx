import { createRoot } from "react-dom/client";
import "../index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "@/App";
import Stories from "@/pages/stories";
import Market from "@/pages/market";
import Friends from "@/pages/friends";
import Feeds from "@/pages/feeds";
import Discussions from "@/pages/discussions";

const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
		children: [
      { path: "stories", Component: Stories },
      { path: "market", Component: Market },
      { path: "friends", Component: Friends },
      { path: "feeds", Component: Feeds },
      { path: "discussions", Component: Discussions },

    ],
	},
]);

createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
