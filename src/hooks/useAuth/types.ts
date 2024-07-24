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

export interface ResetPasswordResponse {
  status_code: number;
  message: string;
  error: string | null;
  data: null;
}

export interface ResetPasswordPayload {
  old_password: string;
  new_password: string;
  confirmation_password: string;
}
