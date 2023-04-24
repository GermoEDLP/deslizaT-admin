import { AuthLoginPayload, AuthLoginResponse } from "../state/interfaces";

const url = process.env.SERVER_URL?.toString() || '';
export class AuthService {
  private server_url = `${url}/auth`;

  async login(payload: AuthLoginPayload): Promise<AuthLoginResponse> {
    const url = `${this.server_url}/login`;
    console.log("url", url);
    
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  }
}
