import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button.js'

describe('Button', () => {
  let mockEvent = {
    preventDefault: jest.fn(), 
    target: <button className = 'favorites'>favorites</button>
  }
  let mockCallback = jest.fn()
  let button;

  beforeEach(() => {
    button = shallow(<Button
      callback={mockCallback}
      category='favorites' />)
  });

  it('matches snapshot', () => {
    expect(button).toMatchSnapshot()
  });


  it('should execute callback function with onclick', () => {
    button.find('button').simulate('click', mockEvent)

    expect(mockCallback).toHaveBeenCalled()
  });



  it('should pass the category prop in as a className value', () => {
    expect(button.find('.planets').length).toEqual(0)
    expect(button.find('.favorites').length).toEqual(1)

    button.setProps({ category: 'planets'})

    expect(button.find('.planets').length).toEqual(1);
  });
});

  // **Functionality works, need to find how to test**
  // it('should toggle only target button class to active with onclick', () => {
  //   expect(button.find('.favorites').hasClass('active')).toEqual(false);

  //   button.find('button').simulate('click', mockEvent)

  //   expect(button.find('.favorites').hasClass('active')).toEqual(true);
  //   expect(button.find('button.planets').hasClass('.active')).toEqual(false);
  // });
