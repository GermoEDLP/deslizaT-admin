import {
  BIKE_SIZE,
  BIKE_TYPE,
} from "../components/bike/modals/bike-data.modal";
import {
  Bike,
  CreateBikePayload,
  FormBikesValues,
  UpdateBikePayload,
} from "../state/interfaces";

const url = process.env.SERVER_URL?.toString() || "";
export class BikesService {
  private server_url = `${url}/bike`;

  async getBikes(): Promise<Bike[]> {
    const url = `${this.server_url}`;
    const response = await fetch(url, {
      method: "GET",
    });
    if (response.status !== 200 && response.status !== 201) {
      const data = await response.json();
      throw new Error(data.message);
    }
    const data = await response.json();
    return data;
  }

  async getBike(id: string): Promise<Bike> {
    const url = `${this.server_url}/${id}`;
    const response = await fetch(url, {
      method: "GET",
    });
    if (response.status !== 200 && response.status !== 201) {
      const data = await response.json();
      throw new Error(data.message);
    }
    const data = await response.json();
    return data;
  }

  async createBike(bike: CreateBikePayload) {
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
    if (response.status !== 200 && response.status !== 201) {
      const data = await response.json();
      throw new Error(data.message);
    }
    const data = await response.json();
    return data;
  }

  async updateBike(bike: UpdateBikePayload): Promise<Bike> {
    const url = `${this.server_url}/${bike._id}`;
    const body = {
      brand: bike.brand,
      model: bike.model,
      description: bike.description,
      user: bike.user,
      size: BIKE_SIZE.find((size) => size.value === bike.size),
      type: BIKE_TYPE.find((type) => type.value === bike.type),
    };
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status !== 200 && response.status !== 201) {
      const data = await response.json();
      throw new Error(data.message);
    }
    const data = await response.json();
    return data;
  }

  async deleteBike(id: string): Promise<Bike> {
    const url = `${this.server_url}/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (response.status !== 200 && response.status !== 201) {
      const data = await response.json();
      throw new Error(data.message);
    }
    const data = await response.json();
    return data;
  }
}
