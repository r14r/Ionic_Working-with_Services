export class ShareDataModel {
	name: string;
	desc: string;
	data: string;

	constructor(name: string, desc: string = '', data: string = '') {
		this.name = name;
		this.desc = desc;
		this.data = data;
	}
}
