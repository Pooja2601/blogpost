import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('render properly',()=>{
const wrapper=shallow(<App/>).html();
expect(wrapper).toMatchSnapshot();

})
it('render properly',()=>{
  const wrapper=shallow(<App/>)
  const actual=wrapper.find('h1').text()
  const expected='Welcome'
  expect(actual).toEqual(expected);
  
  })
