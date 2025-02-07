import React, { Fragment, useState, useCallback, type FC } from "react";
// components
import Card from "@/components/common/Card";
import ActionButtons from "@/components/common/ActionButtons";
import { H2 } from "@/components/common/Headers";
// assets
import OptionImage1 from "public/assets/images/step2/option1.png";
import OptionImage2 from "public/assets/images/step2/option2.png";
import OptionImage3 from "public/assets/images/step2/option3.png";
import OptionImage4 from "public/assets/images/step2/option4.png";
// types
import type { IStep } from "@/types/stepType";

const AboutYouStep: FC<IStep> = ({ onPrevStep, onNextStep }) => {
  const optionsArr = [
    {
      id: 1,
      img: OptionImage1,
      alt: "OptionImage1",
      title: "Medicare Advantage Prescription Drug",
    },
    {
      id: 2,
      img: OptionImage2,
      alt: "OptionImage2",
      title: "Prescription Drug Plan",
    },

    {
      id: 3,
      img: OptionImage3,
      alt: "OptionImage3",
      title: "Supplemental Insurance",
    },
    {
      id: 4,
      img: OptionImage4,
      alt: "OptionImage4",
      title: "No Idea Help me out",
    },
  ];
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelectOption = useCallback(
    (index: number) => () => {
      setSelectedOption(index);
    },
    []
  );

  return (
    <div className="mt-10 px-5 md:mt-18">
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col  justify-center items-center w-full">
          <H2 className="max-w-[350px] md:max-w-[860px] text-[30px] md:text-[50px] font-normal !leading-normal md:!leading-tight text-center">
            Do You Know The Type Of Plan You Want To Sign Up For?
          </H2>
        </div>
        <div className="flex flex-wrap xl:flex-nowrap w-full justify-center gap-x-2 md:gap-x-5 gap-y-9 mt-11 md:mt-19">
          {optionsArr.map((item, index) => (
            <Fragment key={item.id}>
              <Card
                image={item.img}
                isActive={selectedOption === index}
                onClick={handleSelectOption(index)}
                label={item.title}
              />
            </Fragment>
          ))}
        </div>
        <ActionButtons
          onClickPrimaryButton={onNextStep}
          onClickSecondaryButton={onPrevStep}
        />
      </div>
    </div>
  );
};

export default AboutYouStep;
