import postReducer from './postReducer';
import {
  createPost,
  deletePost
} from '../actions/postActions';

describe('post reducer', () => {

  it('creates a post', () => {
    const initialState = [];

    expect(postReducer(initialState, createPost('bla', 'myFirstPost'))).toEqual([
      {
        postBody: 'bla',
        title: 'myFirstPost'
      }
    ]
    );
  });

  it('deletes a post', () => {
    const initialState = ['bla'];

    expect(postReducer(initialState, deletePost('bla'))).toEqual([]);
  });
});
