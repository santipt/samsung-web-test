import React, { useEffect } from 'react';
import { fetchProducts } from '../redux/slices/productsListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import ProductCard from '../components/ProductCard';

function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const { products, status, error } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    return (
        <div className='flex flex-col justify-center items-center py-10'>
            <img className='w-1/4' src='https://www.freepnglogos.com/uploads/black-samsung-logo-png-21.png' alt='Samsung logo' />
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            {status === 'succeeded' && (
                <div className='grid grid-cols-3 gap-4 p-10'>
                    {products.map((product: any) => (
                        <ProductCard key={product?.fmyEngName} item={product} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
