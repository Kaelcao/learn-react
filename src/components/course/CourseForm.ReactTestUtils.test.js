import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) {
  let props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {
    },
    onChange: () => {
    }
  };
  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let output = renderer.getRenderOutput();
  return {
    props,
    output,
    renderer
  }
}

describe('CourseForm via React TestUtils', () => {
  it('renders from and h1', () => {
    const {output} = setup();
    expect(output.type).toBe('form');
    let [h1] = output.props.children;
  });

  it('save button is labeled "save" when not saving', ()=> {
    const {output} = setup(false);
    let submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving', ()=> {
    const {output} = setup(true);
    let submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Saving...');
  })
});
