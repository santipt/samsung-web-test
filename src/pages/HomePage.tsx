import React, { useEffect } from 'react';
import { fetchProducts } from '../redux/slices/productsListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import ProductCard from '../components/ProductCard';
import ProductSkeletonCard from '../components/ProductSkeletonCard';

function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const { products, status, error } = useSelector((state: RootState) => state.products);

    const skeletonArray = new Array(10).fill(null);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    return (
        <div className='flex flex-col justify-center items-center py-10'>
            <img className='w-60' src='https://www.freepnglogos.com/uploads/black-samsung-logo-png-21.png' alt='Samsung logo' />
            {status === 'loading' && (
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10'>
                    {skeletonArray.map((_, index) => (
                        <ProductSkeletonCard key={index} />
                    ))}
                </div>
            )}
            {error &&
                <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-12'>
                    <p className='text-lg font-semibold'>Something went wrong.</p>
                    <p className='mt-2 text-base'>We’re working on it and will have it fixed as soon as possible. Please try again later.</p>
                </div>}
            {status === 'succeeded' && (
                <>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10'>
                        {products.map((product: any) => (
                            <ProductCard key={product?.fmyEngName} item={product} />
                        ))}
                    </div>
                    <div className='w-full flex justify-end items-end px-12'>
                        <span className='text-xs text-gray-400'>Made by Santiago Perez</span>
                    </div></>
            )}
        </div>
    );
}

export default Home;
