import React from 'react';

import ContextProvider from './components/ContextProvider';
import BreedSelector from './components/BreedSelector';
import DogViewer from './components/DogViewer';



const App = () => {
  return (
    <div className='flex flex-col items-center gap-10 h-screen p-20 bg-purple-300'>
      <ContextProvider>
        <h1 className='text-5xl font-black uppercase text-purple-500 tracking-wide'>dog viewer</h1>
        <BreedSelector />
        <DogViewer />
      </ContextProvider>
    </div>
  );
}

export default App;
