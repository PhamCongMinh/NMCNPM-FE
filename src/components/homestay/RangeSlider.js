import { Range } from 'rc-slider';
import { useState } from 'react';
import 'rc-slider/assets/index.css';

const maxPrice = 3000000;       // 3tr
const minPrice = 500000;        // 500k

const RangeSlider = () => {
    const [value, setValue] = useState([0, 100]);
    const onSliderChange = value => setValue(value);

    const calPrice = scale => (maxPrice - minPrice) * scale / 100 + minPrice;

    return (
        <>
            <div className="p-4 border-b">
                <h1 className="text-2xl font-bold mb-2">Khoảng giá</h1>
                Histogram??
                <Range allowCross={false} value={value} onChange={onSliderChange}/>
                <div className="mt-8 px-4 flex justify-between ">
                    <div>
                        <label htmlFor="minPrice" className="block text-gray-700 text-sm font-bold mb-2">Giá tối thiểu</label>
                        <input id="minPrice" type="number" value={calPrice(value[0])} onChange={(e) => setValue([e.target.value, value[1]])} className="shadow border rounded w-full p-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div>
                        <label htmlFor="maxPrice" className="block text-gray-700 text-sm font-bold mb-2">Giá tối đa</label>
                        <input id="maxPrice" type="number" value={calPrice(value[1])} onChange={(e) => setValue([value[0], e.target.value])} className="shadow border rounded w-full p-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                </div>
            </div>
            <style>{`
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                  -webkit-appearance: none;
                }

                input[type=number] {
                    -moz-appearance: textfield;
                }
            `}</style>
        </>
    )
}

export default RangeSlider;