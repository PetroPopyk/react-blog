export const addArticle = (article) => {
  return (dispatch, getState) => {
    dispatch({type: 'ADD_ARTICLE', article});
  };
};
