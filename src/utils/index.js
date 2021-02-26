export const composeBreedList = rawBreeds => {
    let breedArray = [];

    Object.keys(rawBreeds).forEach(breed => {
        breedArray.push({ value: breed, label: breed.substr(0, 1).toUpperCase() +breed.substr(1) })
    })

    return breedArray;
};

