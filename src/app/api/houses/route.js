import { HousesController } from "./HousesController.js";

export async function GET(request) {
    const houses = await HousesController.getAll(request);
    return Response.json(houses);
}

export async function POST(request) {
    const body = await request.json();
    return new Response('OK');
}