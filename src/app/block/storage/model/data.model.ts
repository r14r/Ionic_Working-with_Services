export class DataItem {
	id: number;
	name: string;
	desc: string;
	data: string;
	timestamp: number;
	icon: string;

	constructor(name: string, desc: string, data: string) {
		this.name = name;
		this.desc = desc;
		this.data = data;
	}
}
