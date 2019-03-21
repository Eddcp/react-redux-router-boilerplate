import App from '../App';
import React from 'react';
import { shallow } from 'enzyme'
import { Route } from 'react-router-dom';

describe('<App />', () => {
  it('should render some routes', () => {
    const renderedComponent = shallow(<App />);
    exportAllDeclaration(renderedComponent.find(Route).length).not.toBe(0);
  });
});