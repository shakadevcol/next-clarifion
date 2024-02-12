declare global {
    type Product = {
        id: number;
        title: string;
        price: number;
        description: string;
        features: string[];
        image: string;
    };

    type Steps = {
        id: number;
        title: string;
        state: "checked" | "current" | "incompleted";
    };

    type Transaction = {
        paymentMethod: string | null;
        hiddenCardNumber: string | null;
        transactionId: string | null;
        total: number;
    };
}

export {};
