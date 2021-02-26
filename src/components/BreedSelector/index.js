import React, { useState, useEffect, useContext } from 'react';

import Context from "../../Context";

import Select from "react-select";
import { getBreedList } from '../../api/dogApi';
import { composeBreedList } from '../../utils';


const BreedSelector = () =>  {
  const [ breeds, setBreeds ] = useState(null);
  const { setBreed } = useContext(Context);

  useEffect(() => {
      getBreedList()
        .then(response => {
            setBreeds(composeBreedList(response));
        })
        .catch(err => {
            console.log("🚀 ~ file: index.js ~ line 22 ~ useEffect ~ err", err)
        });
  }, []);

  const handleChange = ({value: selectedBreed }) => {
    setBreed(selectedBreed)
  }
  
  return (
    <div className='w-1/3'>
      <Select
        placeholder='Select breed'
        defaultValue={null}
        onChange={handleChange}
        options={breeds || []}
      />
    </div>
  );
};

export default BreedSelector;