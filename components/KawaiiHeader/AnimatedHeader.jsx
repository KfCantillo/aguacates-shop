import React from 'react';
import { Header, Transition } from 'semantic-ui-react';

import { Avocado } from '@components/SVGIcons';
import { PosMeMuero } from '@components/SVGIcons';

const AnimatedHeader = ({ visible, onClick, onComplete, muerto }) => (
  <Header size='huge' as='h1' onClick={onClick}>
    <Transition animation='jiggle' visible={visible} duration={900} onComplete={onComplete}>
      {muerto ? <PosMeMuero size='58px' /> : <Avocado size='58px' />}
    </Transition>
    KC Fashion
  </Header>
);

export default AnimatedHeader;
