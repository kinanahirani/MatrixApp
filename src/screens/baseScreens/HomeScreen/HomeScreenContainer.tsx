import React from 'react';

import AppHeader from '../../../components/AppHeader';
import HomeScreen from './HomeScreen';

const HomeScreenContainer: React.FC = () => {
  return (
    <>
      <AppHeader />
      <HomeScreen />
    </>
  );
};

export default HomeScreenContainer;
