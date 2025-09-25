import React from "react";
import LongInput from "../features/header/LongInput";
import FilterTrigger from "../features/header/FilterTrigger";
import PublishTrigger from "../features/header/PublishTrigger";
import NotificationButton from "../features/header/NotificationButton";
import SettingButton from "../features/header/SettingButton";
import ThemeTrigger from "../features/header/ThemeTrigger";
import TranslatorTrigger from "../features/header/TranslatorTrigger";
import { UserDropdown } from "../features/header/UserDropdown";
import { user } from "@/data/user";

export default function HeaderApp() {
	return (
		<section className="m-2 bg-background flex gap-x-9 ">
			<div className="deb flex items-center gap-x-3">
				{/* input */}
				<LongInput />
				{/* Filtre */}
				<FilterTrigger />
			</div>
			<div className="sec flex items-center gap-x-6 ml-auto">
				{/* button publier */}
				<PublishTrigger />
				{/* button notifier */}
				<NotificationButton />
				{/* button settings */}
				<SettingButton />

				{/* dropdown photo */}
				<UserDropdown user={user} />

				<div className="end flex items-center gap-x-3 ml-15">
					{/* button theme */}
					<ThemeTrigger />
					{/* button Langue */}
					<TranslatorTrigger />
				</div>
			</div>
		</section>
	);
}
