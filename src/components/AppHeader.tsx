import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

// Utils
import {verticalScale} from '../utils/sizeHelpers';

// Configs
import {theme} from '../config/theme';

const AppHeader: React.FC = () => {
  return <SafeAreaView style={styles.header} />;
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    height: verticalScale(55),
    backgroundColor: theme.color.primaryGreen,
  },
});
