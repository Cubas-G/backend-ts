export interface User {
    name: string
    username: string
    password: string
}

export interface UserLogin extends Omit<User, 'name'> {

}