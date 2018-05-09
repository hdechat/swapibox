import React from 'react';
import ReactDom from 'react-dom';
import {shallow, mount } from 'enzyme';
import Button from './Button.js';

describe('Button', () => {
  const mockFunction = jest.fn();
  let button;

  beforeEach(() => {
    button = shallow(<Button
      onclick={mockFunction} />);
  })

  it('matches snapshot', () => {
    expect(button).toMatchSnapshot();
  });

  it('should executes callback function with onclick', () => {
    button.instance().simulate('click');

    expect(mockFunction).toHaveBeenCalled();
  });


});