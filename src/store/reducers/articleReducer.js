const initState = {};

const articleReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
    case 'ADD_ARTICLE_SUCCESS':
    case 'DELETE_ARTICLE_SUCCESS':
      return state;
    case 'ADD_ARTICLE_ERROR':
    case 'DELETE_ARTICLE_ERROR':
      console.log(action.error);
      return state;
  }
  return state;
};

export default articleReducer;
