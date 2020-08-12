import { ShareDataModel } from '../../models/data.model';

class ShareDataService {
	public myData: ShareDataModel[];

	constructor() { }

	async load() {
		if (this.myData) {
			return this.myData;
		} else {
			return this.myData;
		}
	}

	async getData() {
		const data = await this.load();
		return data;
	}

	addData(data) {
		this.myData.push(data);
	}

}

export const ShareDataServiceSingleton = new ShareDataService();
