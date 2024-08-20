import React, { useState } from 'react';
import Carousel from './Carousel';
import classNames from 'classnames';

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

    // Setting by default the first option
    const [selectedColor, setSelectedColor] = useState<string>(colorOptions ? colorOptions[0]?.optionCode : '');
    const [selectedMemory, setSelectedMemory] = useState<string>(memoryOptions ? memoryOptions[0]?.optionCode : '');

    const handleSelectColor = (color: string) => {
        setSelectedColor(color);
    };

    return (
        <div className='max-w-sm h-90 rounded-xl overflow-hidden shadow-lg border-2 border-blue-custom'>
            <Carousel images={item?.modelList[0]?.galleryImage} />
            <div className='px-6 py-4'>
                <div className='my-8'>
                    <div className='font-bold text-xl mb-2'>{item?.fmyEngName}</div>
                    <p className='text-gray-700 text-base'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>

                <div className='flex justify-center space-x-4 m-4 mb-8'>
                    {colorOptions?.map((color: any) => (
                        <div key={color.optionCode} className='flex flex-col items-center cursor-pointer'
                            onClick={() => handleSelectColor(color.optionCode)}
                        >
                            <div
                                className={classNames(
                                    'w-8 h-8 rounded-full border-2',
                                    selectedColor === color.optionCode ? 'border-blue-selected' : 'border-gray-300'
                                )}
                                style={{ backgroundColor: color.optionCode }}
                            ></div>
                            <span className='text-black text-center w-16 mt-1'>
                                {color.optionLocalName}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="flex space-x-2 m-2">
                    {memoryOptions?.map((memory: any) => (
                        <div
                            key={memory.optionCode}
                            className={classNames(
                                "p-4 rounded-2xl border-2 flex items-center justify-center text-sm font-semibold text-gray-700 cursor-pointer",
                                selectedMemory === memory.optionCode ? 'border-blue-selected' : 'border-gray-300'
                            )}
                            onClick={() => setSelectedMemory(memory.optionCode)}
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
