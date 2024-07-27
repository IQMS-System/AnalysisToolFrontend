export interface User {
  id: number;
  name: string;
  email: string;
  role: "ADMIN" | "SUPERVISOR" | "OPERATOR";
}

interface Data {
  users: User[];
}

export interface ListUserResponse {
  status_code: number;
  message: string;
  error: string | null;
  data: Data;
}

export interface CreateUserPayload {
  name: string;
  email: string;
  level: number;
  username: string;
  password: string;
}

export interface CreateUserResponse {
  status_code: number;
  message: string;
  error: Error;
  data: string;
}

export interface EditUserResponse {
  status_code: number;
  message: string;
  error: Error;
  data: string;
}

export interface Error {
  non_field_errors: string[];
}

export interface EditUserPayload {
  user_id: number;
  name: string;
  email: string;
  level: number;
}
