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
