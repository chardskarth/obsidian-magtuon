import { Notice, Plugin, PluginSettingTab, Setting } from "obsidian";

import { PLUGIN_NAME } from "./constants"
import { MagtuonSettingTab } from "./settings/magtuon-setting-tab";


export default class MagtuonPlugin extends Plugin {
	async onload() {
		new Notice(`${PLUGIN_NAME} is loaded!`);
		this.addSettingTab(new MagtuonSettingTab(this.app, this));
	}

	async onunload() {
		new Notice(`${PLUGIN_NAME} is unloaded!`);
	}

}
