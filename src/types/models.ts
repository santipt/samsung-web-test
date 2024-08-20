// Defining global types used throughout the application to ensure consistency
export interface Product {
    familyId: string;
    fmyMarketingName: string;
}

export interface ApiResponse {
    response: {
        statusCode: number;
        statusMessage: string;
        siteCode: string;
        resultData: {
            productList: any[];
        };
    }
}
