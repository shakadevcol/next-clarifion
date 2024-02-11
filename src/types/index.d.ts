declare global {
    type Product = {
        id: number;
        title: string;
        price: number;
        description: string;
        features: string[];
        image: string;
    };
}

export {};
