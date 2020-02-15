import React from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';
import Menu from './Menu';
import { Container } from './styles';

const toggleMachine = Machine({
  id: 'toggle',
  initial: 'active',
  states: {
    inactive: { on: { TOGGLE: 'active' } },
    active: { on: { TOGGLE: 'inactive' } },
  },
});

function Header(): JSX.Element {
  const [current, send] = useMachine(toggleMachine);
  return (
    <>
      <Container>
        <h1>Task Report</h1>
        <button type="button" onClick={() => send('TOGGLE')}>
          {current.value === 'active' ? <MdClose /> : <MdMenu />}
        </button>
      </Container>
      {current.value === 'active' && <Menu handleClose={() => send('TOGGLE')} />}
    </>
  );
}

export default Header;
