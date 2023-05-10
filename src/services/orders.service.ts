import { AuthLoginPayload, AuthLoginResponse } from "../state/interfaces";
import {
  CreateOrderPayload,
  Order,
  UpdateOrderPayload,
  UpdateStatusOrderPayload,
} from "../state/interfaces";

const url = process.env.SERVER_URL?.toString() || "";
export class OrdersService {
  private server_url = `${url}/order`;

  async getOrders(): Promise<Order[]> {
    const url = `${this.server_url}?populate=user,bike`;
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

  async getOrder(id: string): Promise<Order> {
    const url = `${this.server_url}/${id}?populate=user,bike`;
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

  async createOrder(order: CreateOrderPayload) {
    const url = `${this.server_url}`;
    const body = {
      ...order,
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

  async updateOrder(order: UpdateOrderPayload): Promise<Order> {
    const url = `${this.server_url}/update/${order._id}`;
    const body = {
      ...order,
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

  async updateOrderStatus(
    updateStatus: UpdateStatusOrderPayload
  ): Promise<Order> {
    const url = `${this.server_url}/status`;
    const body = {
      value: updateStatus.value,
      info: updateStatus.info,
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

  async deleteOrder(id: string): Promise<Order> {
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
