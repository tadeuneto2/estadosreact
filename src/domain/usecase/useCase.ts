type UserResponse = {
    nome: string
    email: string
    imagem: string
}

export interface UserModel {
    getUser: () => Promise<UserResponse>
}