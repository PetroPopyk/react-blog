import { db } from '../../configs/firebaseConfig';

export const addArticle = (article) => {
  return (dispatch, getState) => {
    db.collection('articles').add({...article, createdAt: new Date()}).then(() => {
      dispatch({type: 'ADD_ARTICLE_SUCCESS', article});
    }).catch(error => {
      dispatch({type: 'ADD_ARTICLE_ERROR', error});
    });
  };
};

export const deleteArticle = (id) => {
  return (dispatch, getState) => {
    db.collection('articles').doc(id).delete().then(() => {
      dispatch({type: 'DELETE_ARTICLE_SUCCESS', id});
    }).catch(error => {
      dispatch({type: 'DELETE_ARTICLE_ERROR', error});
    });
  };
};
