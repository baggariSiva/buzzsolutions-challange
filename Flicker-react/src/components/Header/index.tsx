import React, { useState } from "react";

import FlickrIcon from "../../icons/FlickrIcon";
import FlickrLogo from "../../icons/FlickrLogo";
import SearchIcon from "../../icons/SearchIcon";

type Props = {
  setSearchQuery: (searchQuery: string) => void;
};

function Header({ setSearchQuery }: Props): JSX.Element {
  const [inputText, setInputText] = useState<string>("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInputText(event.target.value);
  };

  const handleOnSearch = () => {
    setSearchQuery(inputText);
  };

  return (
    <header className="p-3 text-bg-dark header" data-testid='header'>
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a
          href="/"
          className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <FlickrIcon />
          <FlickrLogo />
        </a>
        <div className="d-flex search-bar">
          <input
            className="form-control me-2 search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleOnChange}
            value={inputText}
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            onClick={handleOnSearch}
            type="submit"
          >
            <SearchIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
