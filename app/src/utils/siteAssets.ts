import store from "@store";

import { fetchConfig } from "@api";
import { SERVER_URL } from "@config";
import type { ThemeData } from "@types";

const addLink = (url: string) => {
	const link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = url;
	document.head.appendChild(link);
};

const addTheme = (theme: ThemeData) => {
	const root = document.documentElement;
	Object.values(theme).forEach((group) => {
		for (const [key, value] of Object.entries(group)) {
			root.style.setProperty(key, value.value);
			if (value?.link) addLink(value.link);
		}
	});
};

export const initSite = async (): Promise<void> => {
	await store.dispatch(fetchConfig());
	const config = store.getState().config;
	if (config.success && config.data) {
		const link = document.head.querySelector("link[rel='icon']") as HTMLLinkElement;
		const url = new URL(config.data.favicon, SERVER_URL).toString();
		link.href = url;
		addTheme(config.data.theme);
		const title = document.head.querySelector("title") as HTMLTitleElement;
		title.innerText = config.data?.name;
	}
};
