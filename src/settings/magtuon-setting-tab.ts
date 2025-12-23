import { Notice, Plugin, PluginSettingTab, Setting } from "obsidian";

export class MagtuonSettingTab extends PluginSettingTab {
	display(): void {
		const { containerEl } = this;
		containerEl.empty();

		new Setting(containerEl)
			.setName("A sample setting")
			.setDesc("some description.")
			.addText((cmp) =>
				cmp
					.setPlaceholder("placeholder text")
					.onChange((v) => console.log("sample setting changed: ", v))
			);
	}
}
