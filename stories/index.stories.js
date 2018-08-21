import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import {
  Button,
  Collapse,
  CollapsePanel,
  ModalContainer,
  ModalManager,
  ButtonGroup
} from '@traveloka/soya-components';

import { BUTTON_GROUP_SIZE } from '@traveloka/soya-components/lib/components/common/ButtonGroup/ButtonGroup';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('@traveloka/soya-components', module)
  .add('Button', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('Button Modal', () => (
    <div>
      <ModalContainer />
      <Button onClick={() => ModalManager.show('Eyy')}>Show</Button>
    </div>
  ))
  .add('Collapse', () => (
    <Collapse>
      <CollapsePanel title='Test'>
        CIHUY
      </CollapsePanel>
    </Collapse>
  ))
  .add('ButtonGroup', () => (
    <ButtonGroup isVertical size={BUTTON_GROUP_SIZE.EXTRA_SMALL || 'sm'}>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  ));
