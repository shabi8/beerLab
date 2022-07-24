export interface IBeer {
    id: string,
    name: string,
    tagline: string,
    first_brewed: Date,
    description: string,
    image_url: string,
    food_pairing: Array<string>
    favorite:boolean | null | undefined
}

