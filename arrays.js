var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  return [...element, array];
}

function destructivelyAddElementToBeggingOfArray(array, element){
  array = [...element, array];
}