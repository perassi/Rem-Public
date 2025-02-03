import { useState } from "react";

import OtherImage1 from "public/assets/images/step5/direction1.png";
import OtherImage2 from "public/assets/images/step5/direction2.png";
import OtherImage3 from "public/assets/images/step5/direction3.png";
import OtherImage4 from "public/assets/images/step5/direction4.png";
import Image from "next/image";
import { H2 } from "./Headers";
import { Button } from "./Button";
import { handleNextStep } from "@/utils/stepUtils";
import { IStep } from "@/types/stepType";

const options = [
  { id: 1, label: "Massage", image: OtherImage1 },
  { id: 2, label: "Acupuncture", image: OtherImage2 },
  { id: 3, label: "Mental Health", image: OtherImage3 },
  { id: 4, label: "Pet Care", image: OtherImage4 },
];


interface ModalProps extends IStep {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  activeStep,
  setActiveStep,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <div className='fixed pt-16 inset-0 flex items-center justify-center bg-black/50 !z-1000'>
      <div className='bg-white w-[1220px] min-h-[700px] rounded-xl p-8 relative shadow-lg !z-1000'>
        <button
          className='absolute w-[60px] h-[60px] top-12 bg-[#DCE1E0] rounded-full right-10'
          onClick={onClose}>
          <svg
            width='60'
            height='60'
            viewBox='0 0 60 60'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <circle cx='30' cy='30' r='30' fill='#DCE1E0' />
            <path
              d='M20 40L40 20'
              stroke='#172A25'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M40 40L20 20'
              stroke='#172A25'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>

        <div className=' mt-5 w-full h-[100px] border-b'>
          <H2 className='text-[50px] text-center mb-8'>Other Benefits</H2>
        </div>


        <div className='flex mt-20 flex-wrap justify-center gap-6'>
          {options.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col w-[270px] relative    cursor-pointer`}
              onClick={() => handleSelectOption(index)}>
              <div
                className={`relative w-full h-[220px] flex flex-col rounded-[15px] items-center border-2 ${
                  selectedOption === index
                    ? "border-rem-green-400"
                    : "border-gray-200"
                }`}>
                <Image src={item.image} alt={item.label} />
              </div>
              <div className='p-4 bg-white  flex items-center justify-center'>
                <span className=' text-[20px] mt-5 leading-[1.25] font-400  text-center'>
                  {item.label}
                </span>
                {selectedOption === index ? (
                  <div className='w-[30px] h-[30px] absolute -top-3 left-32 bg-rem-green-400 rounded-full flex items-center justify-center'>
                    <svg
                      className='w-4 h-4 text-black'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 13l4 4L19 7'></path>
                    </svg>
                  </div>
                ) : (
                  <div className='w-[30px] h-[30px] absolute -top-3 left-32 bg-rem-green-400 rounded-full flex items-center justify-center'>
                    <svg
                      width='30'
                      height='30'
                      viewBox='0 0 30 30'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <circle cx='15' cy='15' r='15' fill='#DCE1E0' />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className='mt-12 w-full flex items-center justify-center'>
          <Button
            type='fill'
            className='rounded-full w-[310px] text-[16px] leading-[1.25]'
            onClick={() => handleNextStep({ activeStep, setActiveStep })}>
            Save & Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
