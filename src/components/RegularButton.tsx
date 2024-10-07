import React from 'react';
import {TouchableOpacity, StyleSheet, Text, ViewStyle} from 'react-native';

// Configs
import {theme} from '../config/theme';

// Utils
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../utils/sizeHelpers';

type RegularButtonProps = {
  width?: number;
  color?: string;
  text: string;
  textColor?: string;
  borderColor?: string;
  disabled?: boolean;
  style?: ViewStyle;
  onPress?: () => void;
};

export const RegularButton = ({
  width = horizontalScale(220),
  color = theme.color.primaryGreen,
  text,
  textColor = theme.color.white,
  borderColor,
  disabled = false,
  style,
  onPress,
}: RegularButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.button,
        {
          width: width,
          backgroundColor: disabled ? theme.color.black01 : color,
          borderColor: disabled
            ? theme.color.black01
            : borderColor
            ? borderColor
            : color,
        },
        style,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={[
          styles.buttonText,
          {color: disabled ? theme.color.white : textColor},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(5),
    height: verticalScale(50),
    borderWidth: 1,
  },
  buttonText: {
    fontSize: moderateScale(16),
    textAlign: 'center',
  },
});
