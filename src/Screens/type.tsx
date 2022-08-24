export interface IState {
    name: string
    date_local: string
    details: string
}
interface Large {
    large: string[]
}
export interface Launches {
    id: string
    name: string
    images: Large
    details: string
    status: string
    launches: string

}