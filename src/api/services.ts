interface ApiResponse<T> {
    data: T;
}

type ProductDetails = Record<string, any>; 

const fetchProductDetails = async (): Promise<void> => {
    try {
        const response = await fetch('https://searchapi.samsung.com/v6/front/b2c/product/card/detail/newhybris?siteCode=nl&modelList=...'); // shortened for brevity

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data: ApiResponse<ProductDetails> = await response.json();
        console.log('Product details:', data.data); // Access the data field based on your API structure
    } catch (error) {
        console.error('There was a problem with fetchProductDetails:', error);
    }
};


export const services = {
    fetchProductDetails
};