import React from 'react';
import { FormattedMessage } from 'react-intl';

const Greeting = ({ name }) => (
  <p>
    <FormattedMessage
      id="hakkimizda"
      values={{ name }}
    />
  </p>
);

export default Greeting;
