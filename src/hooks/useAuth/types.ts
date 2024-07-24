export interface LoginPayload {
  username: string;
  password: string;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface UserResponse {
  status_code: number;
  message: string;
  error: string | null;
  data: {
    user: UserData;
  };
}
