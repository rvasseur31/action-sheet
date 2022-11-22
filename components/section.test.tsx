import React from 'react';
import renderer from 'react-test-renderer';
import Section from './section';

describe('render logItem components', () => {
  it('should render properly wihout any props', () => {
    const tree = renderer.create(<Section title="Action sheet" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
