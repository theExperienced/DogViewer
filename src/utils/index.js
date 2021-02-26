export const composeBreedList = rawBreeds => {
    let breedArray = [];

    Object.keys(rawBreeds).forEach(breed => {
        breedArray.push({ value: breed, label: breed })
    })

    return breedArray;
};

