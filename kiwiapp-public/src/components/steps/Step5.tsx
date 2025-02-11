import React, { useState, Fragment, useCallback, type FC } from "react";
import Card from "@/components/common/Card";
import Modal from "@/components/common/ModalWindow";
import ActionButtons from "@/components/common/ActionButtons";
import { H2 } from "@/components/common/Headers";
import { useBoolean } from "@/hooks/use-boolean";
import { BENEFITS_CARDS } from "@/constants/cards.constants";
import type { IStep } from "@/types/steps.types";

const ExtrasStep: FC<IStep> = ({ onNextStep, onPrevStep }) => {
  const [isOpenModal, { on, off }] = useBoolean(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelectOption = useCallback(
    (index: number) => () => {
      setSelectedOption(index);
    },
    []
  );

  return (
    <div className="mt-7 md:mt-18 px-5 md:px-0">
      <div className="w-full flex flex-col items-center justify-center relative">
        {isOpenModal && (
          <div className="flex justify-center items-center w-screen h-screen top-0 left-0 fixed z-1000 bg-[rgba(23,42,37,0.7)]">
            <Modal onClose={off} onSave={onNextStep} />
          </div>
        )}
        <div className="flex flex-col  justify-center items-center w-full">
          <H2 className="md:max-w-[600px] leading-normal md:!leading-tight font-normal text-center">
            Select The Benefits That Matter Most To You
          </H2>
        </div>
        <div
          className={`w-full flex flex-wrap justify-center gap-y-9 gap-x-2 md:gap-y-10 md:gap-x-4 mt-11 md:mt-19 ${
            isOpenModal && "!-z-10"
          } `}
        >
          {BENEFITS_CARDS.map((item, index) => (
            <Fragment key={item.id}>
              <Card
                image={item.img}
                label={item.label}
                isActive={selectedOption === index}
                onClick={handleSelectOption(index)}
              />
            </Fragment>
          ))}
        </div>
        <ActionButtons
          onClickPrimaryButton={on}
          onClickSecondaryButton={onPrevStep}
        />
      </div>
    </div>
  );
};

export default ExtrasStep;
