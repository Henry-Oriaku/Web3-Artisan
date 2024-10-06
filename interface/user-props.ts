interface Service {
    title: string;
    description: string;
    image?: string;
    price: number;
    negotiable: boolean;
    imageFile?: File | Blob | null
}

interface UserProfile {
    name: string;
    email: string;
    walletAddress: `0x${string}`
    // services: Service[]
}