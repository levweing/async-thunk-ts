export interface User {
    name: {first: string, last: string},
    location: {country: string}
}

export interface UsersState {
    data?: User[],
    isLoading?: boolean,
    isCanceled?: boolean,
    error?: string
}

export interface RootState {
    users: UsersState
}
