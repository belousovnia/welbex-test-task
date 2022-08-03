import { todosList } from "./mainReducer"

export const fetchRequest = () => {
  return function(dispatch) {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => dispatch(todosList(json)))
  }
}