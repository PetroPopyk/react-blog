import { db } from '../../configs/firebaseConfig';

export const addArticle = (article) => {
  return (dispatch, getState) => {
    db.collection('articles').add({...article, createdAt: new Date()}).then(() => {
      dispatch({type: 'ADD_ARTICLE', article});
    }).catch(error => {
      dispatch({type: 'ADD_ARTICLE_ERROR', error});
    });
  };
};
