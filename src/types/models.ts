// Defining global types used throughout the application to ensure consistency

// Because productList is a long list of jsons
// I'm using 'any' which I'm aware that is a bad practice. 
// I would define each property in the Product interface in a real environment
export interface Product {
    familyId: string;
    fmyMarketingName: string;
    // All the other properties...
}

export interface ApiResponse {
    response: {
        statusCode: number;
        statusMessage: string;
        siteCode: string;
        resultData: {
            productList: Product[] | any;
        };
    }
}
