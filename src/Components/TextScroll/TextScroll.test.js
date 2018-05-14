import React from 'react'
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import TextScroll from './TextScroll.js';

describe('TextScroll', () => {
  let textScroll;
  let mockTextCrawl = {
    'title': 'text',
    'text': 'text',
    'release': 'text'
  }

  beforeEach(() => {
    const textScroll = shallow(<TextScroll textCrawl={mockTextCrawl} />)
  });

  it('matches snapshot', () => {
    expect(textScroll).toMatchSnapshot();
  });
  
})
