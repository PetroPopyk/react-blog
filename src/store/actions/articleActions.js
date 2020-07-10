import { toast } from 'react-toastify';
import { db } from '../../configs/firebaseConfig';

export const addArticle = (article) => {
  return (dispatch, getState) => {
    db.collection('articles').add({...article, createdAt: new Date()}).then(() => {
      dispatch({type: 'ADD_ARTICLE_SUCCESS', article});
      toast('Article successfully added!');
    }).catch(error => {
      dispatch({type: 'ADD_ARTICLE_ERROR', error});
    });
  };
};

export const editArticle = (article) => {
  return (dispatch, getState) => {
    db.collection('articles').doc(article.id).update({...article}).then(() => {
      dispatch({type: 'EDIT_ARTICLE_SUCCESS', article});
      toast('Article successfully edited!');
    }).catch(error => {
      dispatch({type: 'EDIT_ARTICLE_ERROR', error});
    });
  };
};

export const deleteArticle = (id) => {
  return (dispatch, getState) => {
    db.collection('articles').doc(id).delete().then(() => {
      dispatch({type: 'DELETE_ARTICLE_SUCCESS', id});
      toast('Article successfully deleted!');
    }).catch(error => {
      dispatch({type: 'DELETE_ARTICLE_ERROR', error});
    });
  };
};
