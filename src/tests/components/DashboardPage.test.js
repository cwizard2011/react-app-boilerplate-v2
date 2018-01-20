import React from 'react';
import { shallow } from 'enzyme';
import  Dashboard  from '../../components/DashboardPage';

test('should render Expense Dashboard Page correctly', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
})