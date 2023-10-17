import { HousesController } from "../HousesController.js";

export async function GET(request, { params }) {
    const house = await HousesController.getById(request, params.id);
    return Response.json(house);
}

export async function DELETE(request) {

}

export async function PATCH(request) {
    
}