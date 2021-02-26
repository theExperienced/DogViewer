import React, { useState } from 'react';

import Context from "../../Context";


const ContextProvider = ({ children }) => {
  const [ selectedBreed, setBreed ] = useState('beagle');

  return (
      <Context.Provider value={{
        selectedBreed,
        setBreed
      }} >
        {children}
      </Context.Provider>
  );
}

export default ContextProvider;
