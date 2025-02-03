import { useState } from 'react';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const options = ['Drug Name  (Xanax)1', 'Drug Name  (Xanax)2', 'Drug Name  (Xanax)3'];

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setQuery(option);
  };

  return (
    <div className="relative w-full ">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full mt-4 h-[60px]  border border-black rounded-[5px] px-4 text-[16px] leading-[1.25] font-sans font-[500]"
        placeholder="Search..."
      />     
        <div className=" w-full mt-5 border border-[#DCE1E0] rounded-[5px] p-2 bg-white z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex items-center p-2  border-b h-[60px]"
              onClick={() => handleSelect(option)}
            >
              <button
                className={`h-[20px] w-[20px] border rounded-full mr-3 ${
                  selectedOption === option ? 'bg-[#18F1A1]' : 'bg-[#DCE1E0]'
                }`}
              />
              <span className="text-[16px] leading-[1.25] font-sans font-[500]">{option}</span>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default SearchComponent;