import db from "../../../../db";

export default class HouseModel {

  	static async getAll() {
		const [rows, fields] = await db.execute('SELECT * FROM house');
		return rows;
  	}

	static async getById(id) {
		const [row, fields] = await db.execute('SELECT * FROM house WHERE id = ?', [id]);
		return row;
	}

	static async create() {

	}

	static async delete() {

	}

	static async update() {

	}

}