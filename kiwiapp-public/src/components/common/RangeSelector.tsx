import { useState } from "react";

const options = [0, 1, 2, 3, 4, 5, "6+"];

const RangeSelector = () => {
  const [selected, setSelected] = useState<number | string>(0);

  const getProgressWidth = (option: number | string) => {
    console.log(options.indexOf(option));
    return `${(options.indexOf(option) / (options.length - 1)) * 100}%`;
  };

  return (
    <div className='flex flex-col items-start gap-y-5 md:gap-y-7 w-full'>
      <div className='flex flex-col md:flex-row justify-between w-full gap-y-5 md:gap-y-7'>
        <div className='flex'>
          {options.map((option, index) => (
            <div key={index}>
              <button
                key={index}
                className={`w-10 ${
                  index !== 0 && "ml-5"
                } h-10 md:w-15 md:h-15 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  selected === option
                    ? "bg-[#872B58] text-white"
                    : "bg-[#DCE1E0] text-gray-700"
                }`}
                onClick={() => setSelected(option)}>
                {option}
              </button>
            </div>
          ))}
        </div>
        <span className='text-black text-[16px] md:text-[20px] leading-5 font-semibold'>{selected} Times</span>
      </div>

      <div className='relative mt-2 w-full h-2 bg-[#DCE1E0] rounded-full'>
        <div
          className='absolute left-0 h-2 bg-[#872B58] rounded-full transition-all duration-300'
          style={{ width: getProgressWidth(selected) }}
        />
      </div>
    </div>
  );
};

export default RangeSelector;
