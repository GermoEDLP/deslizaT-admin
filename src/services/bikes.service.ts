import {
  BIKE_SIZE,
  BIKE_TYPE,
} from "../components/bike/modals/bike-data.modal";
import { Bike, FormBikesValues } from "../state/interfaces";

const url = process.env.SERVER_URL?.toString() || "";
export class BikesService {
  private server_url = `${url}/bike`;

  async getBikes(): Promise<Bike[]> {
    const url = `${this.server_url}`;
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  }

  async getBike(id: string): Promise<Bike> {
    const url = `${this.server_url}/${id}`;
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  }

  async createBike(bike: FormBikesValues) {
    const url = `${this.server_url}`;
    const body = {
      ...bike,
      size: BIKE_SIZE.find((size) => size.value === bike.size),
      type: BIKE_TYPE.find((type) => type.value === bike.type),
    };
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }
}
