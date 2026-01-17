import { createBrowserRouter } from "react-router-dom";

import {
	SendNotifications,
	ManageServers,
	ManageMembers,
	ManageBanned,
	ManageRules,
	Customize,
	Dashboard,
	Feedback,
	Logs,
	Error,
	Home,
	Rules,
	Banned,
	Donate,
	Servers,
	SignIn,
	SignUp,
	Members,
	Privacy,
	Profile,
	Account,
	Contact,
	Security,
	Discussions,
	Notifications,
} from "@pages";

import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";
import MainLayout from "./MainLayout";

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/servers",
				element: <Servers />,
			},
			{
				path: "/members",
				element: <Members />,
			},
			{
				path: "/view-bans",
				element: <Banned />,
			},
			{
				path: "/rules",
				element: <Rules />,
			},
			{
				path: "/discussions",
				element: <Discussions />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/donate",
				element: <Donate />,
			},
			{
				path: "/notifications",
				element: <Notifications />,
			},
		],
	},
	{
		path: "/sign-in",
		element: <SignIn />,
	},
	{
		path: "/sign-up",
		element: <SignUp />,
	},
	// protected routes
	{
		path: "/profile",
		element: <ProtectedRoute />,
		children: [
			{
				index: true,
				element: <Profile />,
			},
			{
				path: "account",
				element: <Account />,
			},
			{
				path: "security",
				element: <Security />,
			},
			{
				path: "Privacy",
				element: <Privacy />,
			},
		],
	},
	// admin routes
	{
		path: "/admin",
		element: <AdminRoute />,
		children: [
			{
				path: "dashboard",
				element: <Dashboard />,
			},
			{
				path: "customize",
				element: <Customize />,
			},
			{
				path: "manage-servers",
				element: <ManageServers />,
			},
			{
				path: "manage-users",
				element: <ManageMembers />,
			},
			{
				path: "bans",
				element: <ManageBanned />,
			},
			{
				path: "manage-rules",
				element: <ManageRules />,
			},
			{
				path: "feedback",
				element: <Feedback />,
			},
			{
				path: "send-notifications",
				element: <SendNotifications />,
			},
			{
				path: "logs",
				element: <Logs />,
			},
		],
	},
	{
		path: "*",
		element: <Error />,
	},
]);

export default router;
