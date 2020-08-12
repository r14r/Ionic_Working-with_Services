export class DataItem {
	id: number;
	name: string;
	desc: string;
	data: string;
	timestamp: number;
	icon: string;

	constructor(name: string, desc: string, data: string, icon: string = 'list') {
		this.name = name;
		this.desc = desc;
		this.data = data;
		this.icon = icon;
		this.id = new Date().getTime();
		this.timestamp = new Date().getTime();
	}
}
