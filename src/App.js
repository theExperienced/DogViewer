import React from 'react';

import ContextProvider from './components/ContextProvider';
import Heading from './components/Heading';
import BreedSelector from './components/BreedSelector';
import DogViewer from './components/DogViewer';



const App = () => {
  return (
    <div className='relative flex flex-col items-center gap-10 h-screen bg-purple-400 pt-xl'>
      <ContextProvider>
        <Heading />
        <BreedSelector />
        <DogViewer />
      </ContextProvider>
    </div>
  );
}

export default App;
