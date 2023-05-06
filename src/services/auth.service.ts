import { AuthLoginPayload, AuthLoginResponse } from "../state/interfaces";

const url = process.env.SERVER_URL?.toString() || "";
export class AuthService {
  private server_url = `${url}/auth`;

  async login(payload: AuthLoginPayload): Promise<AuthLoginResponse> {
    const url = `${this.server_url}/login`;
    console.log("url", payload);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log("response", response, data);
    if (response.status !== 200) {
      throw new Error(data.message);
    }
    return data;
  }
}
