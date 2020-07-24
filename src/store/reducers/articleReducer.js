import { toast } from 'react-toastify';

const initState = {};

const articleReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
    case 'ADD_ARTICLE_SUCCESS':
      toast('Article successfully added!');
      return state;
    case 'DELETE_ARTICLE_SUCCESS':
      toast('Article successfully deleted!');
      return state;
      case 'EDIT_ARTICLE_SUCCESS':
      toast('Article successfully edited!');
      return state;
    case 'ADD_ARTICLE_ERROR':
    case 'DELETE_ARTICLE_ERROR':
    case 'EDIT_ARTICLE_ERROR':
      console.log(action.error);
      toast('Something went wrong!');
      return state;
  }
  return state;
};

export default articleReducer;
