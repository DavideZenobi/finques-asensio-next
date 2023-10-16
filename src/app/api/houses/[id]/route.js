import { HouseController } from "./HouseController";

export async function GET(request, { params }) {
    const house = await HouseController.getById(request, params.id);
    return Response.json(house);
}

export async function DELETE(request) {

}

export async function PATCH(request) {
    
}