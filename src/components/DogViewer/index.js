import React, { useState, useEffect, useContext } from 'react';

import { getImgByBreed } from '../../api/dogApi';
import Context from '../../Context';


const DogViewer = () =>  {
  const { selectedBreed } = useContext(Context);
  const [ url, setUrl ] = useState(null);

  useEffect(() => {
    getImgByBreed(selectedBreed)
        .then(response => {
          setUrl(response);
        })
        .catch(err => {
            setUrl('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_44185374_404-error-page-not-found-concept-and-a-broken-or-dead-link-symbol-as-a-dog-emerging-from-a-hole-hold.html&psig=AOvVaw06MVl7D78iuKnS2YTSnEPe&ust=1614428857158000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjh1qbGh-8CFQAAAAAdAAAAABAD')
        });
  }, [selectedBreed]);
  
  return (
    <div className='w-1/2 h-3/5'>
      <img className='w-full h-full object-contain' src={url}/>
    </div>
  );
};

export default DogViewer;