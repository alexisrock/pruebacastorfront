export interface UserRequest{
    name: string
    email: string
    password: string
}

export interface BaseResponse{
    message: string
    status: number
}