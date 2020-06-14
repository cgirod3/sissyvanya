import proxyquire from 'proxyquire';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

proxyquire.noCallThru();

describe('NavigationTab', () => {
  let Component, defaultProps, oldWindow, newWindow;
  newWindow = { hello: 'there' };

  const sandbox = sinon.createSandbox();
  const classnamesStub = sandbox.stub().returns('classes');
  const enterStub = sandbox.stub();
  const exitStub = sandbox.stub();

  const createProxy = (proxy = {}) => {
    return proxyquire('../../components/NavigationTab', proxy).default;
  };

  const makeComponent = (props) => {
    const opts = Object.assign({}, defaultProps, props);
    return shallow(<Component { ...opts } />);
  };

  beforeAll(() => {
    Component = createProxy({
      classnames: classnamesStub
    });
  });

  beforeEach(() => {
    defaultProps = {
      onEnter: enterStub,
      onExit: exitStub,
      path: '/test',
      text: 'test'
    };

    oldWindow = global.window;
    global.window = newWindow;
  });

  afterEach(() => {
    sandbox.reset();
    global.window = oldWindow;
  });

  it('renders div and text', () => {
    const wrapper = makeComponent();
    expect(wrapper.find('div').length).toEqual(1);
    const tab = wrapper.find('div').get(0);
    expect(tab.props.children).toEqual('test');
  });

  it('performs listener functions', () => {
    const wrapper = makeComponent();
    const div = wrapper.find('div').get(0);
    div.props.onMouseEnter();
    div.props.onMouseLeave();
    expect(enterStub.called).toEqual(true);
    expect(exitStub.called).toEqual(true);
  });

  // TODO: add tests against classnames args
});
