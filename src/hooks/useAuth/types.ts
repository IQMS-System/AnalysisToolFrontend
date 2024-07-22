export interface LoginPayload {
    username: string;
    password: string;
}

export interface AuthResponse {
    status_code: number;
    message: string;
    error?: string;
    data: {
        access_token: string;
        user: {
            id: number;
            name: string;
            email: string;
            role: string;
        };
    };
}