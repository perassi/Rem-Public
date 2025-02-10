import { memo, useRef, useCallback, useState, Fragment, type FC } from "react";
// hooks
import { useOnClickOutside } from "@/hooks/use-outside-click";
// components
import Card from "@/components/common/Card";
import Image from "next/image";
import Button from "@/components/common/Button";
import { H2 } from "@/components/common/Headers";
// constants
import { MODAL_CARDS } from "@/constants/cards.constants";
// assets
import CloseIcon from "public/assets/icons/close-icon.svg";
import LargeCloseIcon from "public/assets/icons/large-close-icon.svg";

interface ModalProps {
  onClose: () => void;
  onSave: () => void;
}

const Modal: FC<ModalProps> = ({ onSave, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  useOnClickOutside(ref, onClose);

  const handleSelectOption = useCallback(
    (index: number) => () => {
      setSelectedOption(index);
    },
    []
  );

  return (
    <div className="w-full py-5 px-5 inset-0 flex items-center justify-center">
      <div
        ref={ref}
        className="overflow-auto w-full max-w-[1220px] max-h-[90vh] md:max-h-[calc(100vh-40px)] bg-white rounded-2xl py-5 md:py-15 relative shadow-lg"
      >
        <button
          className="absolute w-10 h-10 md:h-15 md:w-15 top-5 md:top-13 bg-lightGrayishCyan rounded-full right-5 md:right-10"
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
          {MODAL_CARDS.map((item, index) => (
            <Fragment key={item.id}>
              <Card
                label={item.label}
                image={item.img}
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

export default memo(Modal);
