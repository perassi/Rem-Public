import { useCallback, useState, Fragment } from "react";
// components
import Card from "@/components/common/Card";
import Image from "next/image";
import { H2 } from "@/components/common/Headers";
import { Button } from "./Button";
// assets
import CloseIcon from "public/assets/icons/close-icon.svg";
import LargeCloseIcon from "public/assets/icons/large-close-icon.svg";
import OtherImage1 from "public/assets/images/step5/direction1.png";
import OtherImage2 from "public/assets/images/step5/direction2.png";
import OtherImage3 from "public/assets/images/step5/direction3.png";
import OtherImage4 from "public/assets/images/step5/direction4.png";

const options = [
  { id: 1, label: "Massage", image: OtherImage1 },
  { id: 2, label: "Acupuncture", image: OtherImage2 },
  { id: 3, label: "Mental Health", image: OtherImage3 },
  { id: 4, label: "Pet Care", image: OtherImage4 },
];

interface ModalProps {
  onClose: () => void;
  onSave: () => void;
}

const Modal: React.FC<ModalProps> = ({ onSave, onClose }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelectOption = useCallback(
    (index: number) => () => {
      setSelectedOption(index);
    },
    []
  );

  return (
    <div
      id="Modal"
      className="w-full py-[20px] px-[20px] inset-0 flex items-center justify-center"
    >
      <div className="overflow-auto w-full max-w-[1220px] max-h-[90vh] sm:max-h-[calc(100vh-40px)] bg-white rounded-[20px] py-[20px] sm:py-[60px] relative shadow-lg">
        <button
          className="absolute w-[40px] h-[40px] sm:h-[60px] sm:w-[60px] top-[20px] sm:top-[55px] bg-[#DCE1E0] rounded-full right-[20px] sm:right-[40px]"
          onClick={onClose}
        >
          <div className="sm:hidden">
            <Image src={CloseIcon} alt="close" />
          </div>
          <div className="hidden sm:block">
            <Image src={LargeCloseIcon} alt="close-icon" />
          </div>
        </button>

        <div className="mt-[60px] sm:mt-[0px] w-full border-b">
          <H2 className="text-[30px] sm:text-[50px] text-center mb-[60px]">
            Other Benefits
          </H2>
        </div>

        <div className="px-[20px] flex mt-[45px] sm:mt-[75px] flex-wrap justify-center gap-y-[20px] gap-x-[10px] sm:gap-x-[20px]">
          {options.map((item, index) => (
            <Fragment key={item.id}>
              <Card
                label={item.label}
                image={item.image}
                isActive={selectedOption === index}
                onClick={handleSelectOption(index)}
                classNameContainer="max-w-[170px] md:min-w-[270px]"
                classNameWrapper="h-[170px]"
              />
            </Fragment>
          ))}
        </div>
        <div className="px-[20px] mt-[60px] w-full flex items-center justify-center">
          <Button
            type="fill"
            className="rounded-full w-full sm:w-[310px] text-[16px] leading-[1.25]"
            onClick={onSave}
          >
            Save & Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
