import HouseModel from './HouseModel.js';

export class HousesController {

    static async getAll(request) {
        const houses = await HouseModel.getAll();
        return houses;
    }

    static async getById(request, id) {
        const house = await HouseModel.getById(id);
        return house;
    }

    static async delete(request) {

    }

    static async update(request) {

    }
}