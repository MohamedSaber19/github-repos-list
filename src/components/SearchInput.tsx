import React, { ChangeEvent, useState } from "react";

type Props = {
  onSearch: (searchTerm: string) => void;
};

const SearchInput: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleSearchClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="relative w-full lg:max-w-xl flex justify-center">
      <input
        type="text"
        placeholder="Search repositories..."
        value={searchTerm}
        onChange={handleChange}
        className="border border-gray-400 rounded-md p-2 w-full"
      />
      <button
        className="z-9 absolute right-0 top-0 bottom-0 bg-white rounded-md px-4 text-black active:opacity-80 hover:opacity-80"
        type="submit"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
