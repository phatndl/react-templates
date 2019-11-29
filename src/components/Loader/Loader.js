import React from 'react';
import { useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';
import './Loader.scss';

const Loader = () => {
  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    display: 'none',
  };

  const transitionStyles = {
    entering: { opacity: 0, display: 'block' },
    entered: { opacity: 1, display: 'block' },
    exiting: { opacity: 0, display: 'block' },
    exited: { opacity: 0, display: 'none' },
  };

  const { isLoading } = useSelector(state => state.loader);
  return (
    <Transition in={isLoading} timeout={duration}>
      {state => (
        <div
          id='loader'
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className='spinner'></div>
        </div>
      )}
    </Transition>
  );
};

export default Loader;
