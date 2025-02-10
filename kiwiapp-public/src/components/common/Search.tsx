import { memo, useCallback, useState, type ChangeEvent } from "react";
// constants
import { SEARCH_OPTIONS } from "@/constants/medication.constants";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = useCallback(
    (option: string) => () => {
      setSelectedOption(option);
      setQuery(option);
    },
    []
  );

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={onChange}
        className="w-full mt-5 h-15 border border-black rounded-[5px] px-4 text-[16px] leading-tight font-sans font-medium"
        placeholder="Search..."
      />
      <div className="w-full mt-5 border border-lightGrayishCyan rounded-[5px] p-2 bg-white z-10">
        {SEARCH_OPTIONS.map((option, index) => (
          <div
            key={index}
            className="flex items-center p-2  border-b h-15"
            onClick={handleSelect(option)}
          >
            <button
              className={`h-5 w-5 border rounded-full mr-3 ${
                selectedOption === option
                  ? "bg-rem-green-400"
                  : "bg-lightGrayishCyan"
              }`}
            />
            <span className="text-[16px] leading-tight font-sans font-medium">
              {option}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(SearchComponent);
