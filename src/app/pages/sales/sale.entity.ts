
export interface Sale {
    status: string,
    dates: {
        created_at: string,
        confirmed_at: string
    },
    payment: {
        method: string,
        currency: string,
        total: number
    },
    product: {
        name: string,
        image_url: string
    },
    contact: {
        email: string,
        name: string,
        phone_local_code: string,
        phone_number: string
    },
    source: {
        checkout_id: string,
        checkout_name: string
    }
}