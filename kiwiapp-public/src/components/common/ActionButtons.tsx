import { memo, type FC } from "react";
import Button from "@/components/common/Button";
import { cn } from "@/utils/common.utils";

interface ActionButtonsProps {
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onClickPrimaryButton: () => void;
  onClickSecondaryButton: () => void;
  className?: string;
}

const ActionButtons: FC<ActionButtonsProps> = ({
  className = "",
  primaryButtonText = "Save & Continue",
  secondaryButtonText = "Go Back",
  onClickPrimaryButton,
  onClickSecondaryButton,
}) => {
  const baseStyles = `mt-15 flex w-full max-w-[640px] justify-center items-center gap-x-2  md:gap-x-5`;

  return (
    <div className={cn(baseStyles, className)}>
      <Button
        type="outline"
        className="h-15 rounded-full w-full text-base leading-tight"
        onClick={onClickSecondaryButton}
      >
        {secondaryButtonText}
      </Button>
      <Button
        type="fill"
        className="px-5 rounded-full w-full text-base leading-tight"
        onClick={onClickPrimaryButton}
      >
        {primaryButtonText}
      </Button>
    </div>
  );
};

export default memo(ActionButtons);
