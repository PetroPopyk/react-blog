const initState = {
  articles: [
    {id: '1', title: 'Title 1', description: 'description'},
    {id: '2', title: 'Title 2', description: 'description'},
    {id: '3', title: 'Title 3', description: 'description'}
  ]
};

const articleReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
    case 'ADD_ARTICLE':
      console.log(action.article);
      return state;
    case 'ADD_ARTICLE_ERROR':
      console.log(action.e);
      return state;
  }
  return state;
};

export default articleReducer;
