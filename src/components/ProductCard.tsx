import React from 'react';
import Carousel from './Carousel';

interface ProductCardProps {
    item: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {

    const colorOptions = item?.chipOptions.find(
        (option: any) => option.fmyChipType === 'COLOR'
    )?.optionList;

    const memoryOptions = item?.chipOptions.find(
        (option: any) => option.fmyChipType === 'MOBILE MEMORY'
    )?.optionList;

    const storageOptions = item?.chipOptions.find(
        (option: any) => option.fmyChipType === 'PC STORAGE'
    )?.optionList;

    const sizeOptions = item?.chipOptions.find(
        (option: any) => option.fmyChipType === 'TV SIZE'
    )?.optionList;

    return (
        <div className='max-w-sm h-90 rounded-xl overflow-hidden shadow-lg border-2 border-blue-custom'>
            <img className='w-full' src={item?.modelList[0]?.galleryImage[0]} alt='Product' />
            <div className='px-6 py-4'>
                <div>
                    <div className='font-bold text-xl mb-2'>{item?.fmyEngName}</div>
                    <p className='text-gray-700 text-base'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className='pt-4 pb-2'>
                    <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#photography</span>
                    <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#travel</span>
                    <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#winter</span>
                </div>
                <div className='flex justify-center space-x-4 m-4'>
                    {colorOptions?.map((color: any) => (
                        <div key={color.optionCode} className='flex flex-col items-center'>
                            <div
                                className='w-8 h-8 rounded-full'
                                style={{ backgroundColor: color.optionCode }}
                            ></div>
                            <span className='text-black text-center w-16 mt-1'>
                                {color.optionLocalName}
                            </span>
                        </div>
                    ))}
                </div>
                <div className='flex space-x-2 m-2'>
                    {memoryOptions?.map((memory: any) => (
                        <div
                            key={memory.optionName}
                            className='p-4 rounded-2xl border-2 border-blue-custom flex items-center justify-center text-sm font-semibold text-gray-700'
                        >
                            <span className='text-black'>{memory.optionName}</span>
                        </div>
                    ))}
                </div>
                <div className='flex space-x-2 m-2'>
                    {storageOptions?.map((memory: any) => (
                        <div
                            key={memory.optionName}
                            className='p-4 rounded-2xl border-2 border-red-400 flex items-center justify-center text-sm font-semibold text-gray-700'
                        >
                            <span className='text-black'>{memory.optionName}</span>
                        </div>
                    ))}
                </div>
                <div className='flex space-x-2 m-2'>
                    {sizeOptions?.map((memory: any) => (
                        <div
                            key={memory.optionName}
                            className='p-4 rounded-2xl border-2 border-red-400 flex items-center justify-center text-sm font-semibold text-gray-700'
                        >
                            <span className='text-black'>{memory.optionName}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default ProductCard;
