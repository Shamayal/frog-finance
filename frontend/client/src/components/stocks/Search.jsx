import React, { useState } from "react";
import { mockSearchResults } from "../../constants/mock";
import { XIcon, SearchIcon } from '@heroicons/react/solid';
import SearchResults from "./SearchResults";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [bestMatches, setBestMatches] = useState(mockSearchResults.result)

  // clear the search
  const clear = () => {
    setSearchInput("")
    setBestMatches([])
  }

  const updateBestMatches = () => {
    setBestMatches(mockSearchResults.result)
  }

  return (
    <div className="flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200">
      <input
        type="text"
        value={searchInput}
        className="w-full px-4 py-2 focus:outline-none rounded-md"
        placeholder="Search stock..."
        onChange={(event) => setSearchInput(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            updateBestMatches();
          }
        }}
      />
      {searchInput &&  <button onClick={clear}>
        <XIcon className='h-4 w-4 fill-gray-500 m-1' />
      </button>}

      <button onClick={updateBestMatches} className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center item-center m-1 p-2">
        <SearchIcon className="h-4 w-f fill-gray-100"/>
      </button>

      {searchInput && bestMatches.length > 0 ? <SearchResults results={bestMatches} /> : null }

    </div>
  )
};

export default Search;