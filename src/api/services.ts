import { ApiResponse, Product } from '../types/models';

// Simple fetch request to Samsung API to get the product details
const fetchProductDetails = async (): Promise<Product | any> => {
    try {
        const response = await fetch('https://searchapi.samsung.com/v6/front/b2c/product/card/detail/newhybris?siteCode=nl&modelList=SM-F741BLBGEUB,SM-F741BLBHEUB,SM-F741BLGGEUB,SM-F741BLGHEUB,SM-F741BZSGEUB,SM-F741BZSHEUB,SM-F741BZYGEUB,SM-F741BZYHEUB,SM-F741BAKGEUB,SM-F741BAKHEUB,SM-F741BZWGEUB,SM-F741BZWHEUB,SM-F741BZOGEUB,SM-F741BZOHEUB,SM-F956BDBBEUB,SM-F956BDBCEUB,SM-F956BDBNEUB,SM-F956BLIBEUB,SM-F956BLICEUB,SM-F956BLINEUB,SM-F956BZSBEUB,SM-F956BZSCEUB,SM-F956BZSNEUB,SM-F956BAKBEUB,SM-F956BAKCEUB,SM-F956BAKNEUB,SM-F956BZWBEUB,SM-F956BZWCEUB,SM-F956BZWNEUB,SM-L705FZTAEUB,SM-L705FZWAEUB,SM-L705FDAAEUB,ET-SNL70MOEGEU,ET-SNL70MBEGEU,ET-SNL70MKEGEU,ET-SNL70MWEGEU,SM-X710NZAAEUB,SM-X710NZAEEUB,SM-X710NZEAEUB,SM-X710NZEEEUB,SM-X716BZAAEUB,SM-X716BZAEEUB,SM-X810NZAAEUB,SM-X810NZAEEUB,SM-X810NZEAEUB,SM-X810NZEEEUB,SM-X816BZAAEUB,SM-X816BZAEEUB,SM-X910NZAAEUB,SM-X910NZAEEUB,SM-X910NZAIEUB,SM-X910NZEAEUB,SM-X910NZEEEUB,SM-X916BZAAEUB,SM-X916BZAEEUB,SM-X916BZAIEUB,NP940XMA-KB1NL,NP960XMA-KB1NL,NP960XMB-KB1NL,QE65LS03DAUXXN,QE32LS03CBUXXN,QE65LS03BGUXXN,QE32LS03BBUXXN,QE55QE1DAUXXN,QE65QNX1DATXXN,QE65QN900DTXXN,QE65QN800DTXXN,QE55Q72DATXXN,QE55QN88DBTXXN&commonCodeYN=N&saleSkuYN=N&onlyRequestSkuYN=Y&keySummaryYN=N&shopSiteCode=nl');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data: ApiResponse = await response.json();
        return data?.response?.resultData?.productList;
    } catch (error) {
        if (error instanceof Error) {
            console.error('There was a problem with fetchProductDetails:', error);
            throw new Error(error?.message);
        } else {
            console.error('Unexpected error:', error);
        }
    }
};

export const services = {
    fetchProductDetails
};