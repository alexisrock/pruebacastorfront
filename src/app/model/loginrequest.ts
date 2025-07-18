export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: boolean;
    name: string;
}
