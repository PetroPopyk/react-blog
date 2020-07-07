import { db } from '../../configs/firebaseConfig';

export const addArticle = (article) => {
  return (dispatch, getState) => {
    db.collection('articles').add({...article, authorFirstName: 'Petro', authorLastName: 'Popyk', authorId: 0, createdAt: new Date()}).then(() => {
      dispatch({type: 'ADD_ARTICLE', article});
    }).catch(error => {
      dispatch({type: 'ADD_ARTICLE_ERROR', error});
    });
  };
};
