import { NavLink } from "react-router-dom";
import { useState } from "react";

import { Text, Button } from "@ui";
import { SERVER_URL } from "@config";
import { useAppSelector } from "@store";
import { HamBurger, MultiplyCircle, User } from "@icons";

const Navbar = () => {
	const { is_authenticated, user_data } = useAppSelector((state) => state.auth);
	const { data: config } = useAppSelector((state) => state.config);
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ label: "Home", href: "/" },
		{ label: "Servers", href: "/servers" },
		{ label: "Members", href: "/members" },
		{ label: "Banned", href: "/view-bans" },
		{ label: "Rules", href: "/rules" },
		{ label: "Discussions", href: "/discussions" },
		{ label: "Contact", href: "/contact" },
		{ label: "Donate", href: "/donate" },
		{ label: "Admin", href: "/admin", admin_route: true },
		{ label: "🔔", href: "/notifications" },
	];

	return (
		<nav className="min-w-screen h-[90px] flex justify-center items-center bg-bnavbar text-tnavbar font-navbar text-sm border border-b-light">
			<ul className="min-w-[90vw] max-w-[1280px] flex justify-between items-center ">
				<div className="flex justify-between items-center gap-[30px]">
					<HamBurger className="lg:hidden" onClick={() => setIsOpen((prev) => !prev)} />
					<NavLink to="/" className="flex gap-[30px] items-center">
						{config?.favicon && (
							<img
								src={`${SERVER_URL}/${config.favicon}`}
								className="hidden sm:inline"
							/>
						)}
						{config?.name && (
							<Text size="2xl" children={config.name} className="text-tnavbar!" />
						)}
					</NavLink>
				</div>
				{window.innerWidth >= 1024 &&
					navItems.map((item) => {
						if (item.admin_route && user_data?.tag === "member") return;
						return <NavLink key={item.label} to={item.href} children={item.label} />;
					})}
				{is_authenticated ? (
					<NavLink to="/profile" className="flex justify-between items-center gap-[10px]">
						<User />
						<span children={user_data?.display_name} className="font-user" />
					</NavLink>
				) : (
					<div className="flex justify-between items-center gap-[30px]">
						<NavLink to="/sign-in" children="Log in" />
						<NavLink to="/sign-up">
							<Button variant="auth" children="Sign up" className="text-xs!" />
						</NavLink>
					</div>
				)}
			</ul>

			{isOpen && (
				<ul className="fixed top-0 left-0 bg-white w-[60vw] sm:w-[30vw] h-screen flex flex-col gap-[30px] text-lg px-[40px] py-[30px] overflow-y-auto border border-r-light">
					<MultiplyCircle
						className="absolute top-0 right-0 hover:cursor-pointer"
						fill="none"
						stroke="grey"
						onClick={() => setIsOpen((prev) => !prev)}
					/>
					<NavLink to="/" className="flex gap-[30px] items-center">
						{config?.favicon && <img src={`${SERVER_URL}/${config.favicon}`} />}
						{config?.name && (
							<Text size="2xl" children={config.name} className="text-tnavbar!" />
						)}
					</NavLink>
					{navItems.map((item) => {
						if (item.admin_route && user_data?.tag === "member") return;
						return <NavLink key={item.label} to={item.href} children={item.label} />;
					})}
				</ul>
			)}
		</nav>
	);
};

export default Navbar;
