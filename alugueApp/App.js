import React from 'react';
import { StatusBar } from 'react-native';

import MainStack from './src/stack/MainStack';

export default () => {
    return (
      <>
      <StatusBar style="light" backgroundColor="#000" translucent={false} />
      <MainStack />
      </>
    );
}