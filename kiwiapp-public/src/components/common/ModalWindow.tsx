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
      className="w-full py-5 px-5 inset-0 flex items-center justify-center"
    >
      <div className="overflow-auto w-full max-w-[1220px] max-h-[90vh] md:max-h-[calc(100vh-40px)] bg-white rounded-2xl py-5 md:py-15 relative shadow-lg">
        <button
          className="absolute w-10 h-10 md:h-15 md:w-15 top-5 md:top-13 bg-[#DCE1E0] rounded-full right-5 md:right-10"
          onClick={onClose}
        >
          <div className="md:hidden">
            <Image src={CloseIcon} alt="close" />
          </div>
          <div className="hidden md:block">
            <Image src={LargeCloseIcon} alt="close-icon" />
          </div>
        </button>

        <div className="mt-15 md:mt-0 w-full border-b">
          <H2 className="text-[30px] md:text-[50px] text-center mb-15">
            Other Benefits
          </H2>
        </div>

        <div className="px-5 flex mt-11 md:mt-19 flex-wrap justify-center gap-y-5 gap-x-2 md:gap-x-5">
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
        <div className="px-5 mt-15 w-full flex items-center justify-center">
          <Button
            type="fill"
            className="rounded-full w-full md:w-[310px] text-[16px] leading-tight"
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
