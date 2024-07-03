export interface IUser {
    id: number
    username: string
    email: string
    password: string
    inCart?: number[]
    inFavorite?: number[]
}

export interface IAuth {
    user: IUser | null
    token: string | null
}
export interface IRegistrate {
    username: string
    email: string
    password: string
}
export interface ILogin {
    email: string
    password: string
}

export interface IsneakersCardData {
    id: number
    title: string
    price: number
    image: string
}