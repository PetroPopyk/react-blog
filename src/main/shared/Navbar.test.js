import React from 'react';
import { Link } from 'react-router-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import { mapStateToProps, Navbar as NavbarComponent } from './Navbar';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const renderer = new ShallowRenderer();

test('should render child SignedInLinks if auth uid is defined', () => {
  const propsData = {
    auth: {
      uid: 1
    }
  };

  renderer.render(<NavbarComponent {...propsData}/>);
  const result = renderer.getRenderOutput();
  expect(result.props.children).toEqual(
        <div className="container">
          <Link to={'/'}>Home</Link>
          <SignedInLinks/>
        </div>
  );
});

test('should render child SignedInLinks if auth uid is defined', () => {
  const propsData = {
    auth: {
      uid: undefined
    }
  };

  renderer.render(<NavbarComponent {...propsData}/>);
  const result = renderer.getRenderOutput();
  expect(result.props.children).toEqual(
      <div className="container">
        <Link to={'/'}>Home</Link>
        <SignedOutLinks/>
      </div>
  );
});

test('should receive data from state via mapStateToProps', () => {
  const initialState = {
    firebase: {
      auth: {
        uid: 'Test'
      }
    }
  };
  const state = mapStateToProps(initialState);
  expect(state.auth.uid).toBe('Test');
});
