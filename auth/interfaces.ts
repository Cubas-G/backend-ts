export interface User {
    id: string
    name: string
    username: string
    password: string
    token?: string
    profile_id: string
}

export interface UserLogin extends Omit<User, 'name'> {

}