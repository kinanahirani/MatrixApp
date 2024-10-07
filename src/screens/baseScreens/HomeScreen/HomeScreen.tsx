import React, {useCallback, useRef, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TextInput,
  StyleSheet,
  ScrollView,
  ListRenderItem,
} from 'react-native';

// Components
import {RegularButton} from '../../../components/RegularButton';

// Utils
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/sizeHelpers';

// Configs
import {theme} from '../../../config/theme';
import {notifyMessage} from '../../../utils/toastMessage';

// Types
type MatrixItem = number;
type RenderItemProps = {
  index: number;
};

const HomeScreen: React.FC = () => {
  const [matrixSize, setMatrixSize] = useState<string>('');
  const [matrix, setMatrix] = useState<MatrixItem[]>([]);
  const [filledIndex, setFilledIndex] = useState<number | null>(null);
  const matrixSizeRef = useRef<number>(0);

  const createMatrix = () => {
    const size = parseInt(matrixSize);

    if (!size || size <= 0) {
      notifyMessage('Please enter a valid number.');
      return;
    }

    matrixSizeRef.current = size;
    const totalButtons = size * size;

    const newMatrix = Array.from({length: totalButtons}, (_, index) => index);
    setMatrix(newMatrix);

    setFilledIndex(null);
  };

  // Function to randomly change a button's color
  const changeButton = () => {
    if (matrix.length === 0) {
      notifyMessage('Matrix is empty, create a matrix first.');
      return;
    }

    const totalButtons = matrix.length;
    const randomIndex = Math.floor(Math.random() * totalButtons);
    setFilledIndex(randomIndex);
  };

  // Render each button in the matrix
  const renderButton: ListRenderItem<MatrixItem> = useCallback(
    ({index}: RenderItemProps) => {
      const buttonColor =
        index === filledIndex ? styles.filledButton : styles.defaultButton;

      return (
        <RegularButton
          text={(index + 1).toString()}
          width={horizontalScale(70)}
          style={[styles.button, buttonColor]}
          textColor={theme.color.black04}
        />
      );
    },
    [filledIndex],
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={matrixSize}
          onChangeText={setMatrixSize}
          placeholder="Enter number"
        />
        <RegularButton
          text="Submit"
          onPress={createMatrix}
          width={horizontalScale(70)}
          style={styles.submitButton}
        />
      </View>

      {matrixSizeRef.current > 0 && (
        <Text style={styles.matrixInfoText}>
          {matrixSizeRef.current}x{matrixSizeRef.current} matrix:
        </Text>
      )}

      <ScrollView horizontal>
        <FlatList
          key={matrix.length}
          data={matrix}
          renderItem={renderButton}
          numColumns={matrixSizeRef.current}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.matrixContainer}
        />
      </ScrollView>

      {matrix.length > 0 && (
        <View style={styles.changeButtonContainer}>
          <RegularButton text="Change" onPress={changeButton} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(20),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderColor: theme.color.gray,
    borderWidth: 3,
    padding: moderateScale(10),
    marginRight: horizontalScale(10),
    width: horizontalScale(200),
    height: verticalScale(50),
    textAlign: 'center',
    borderRadius: 4,
  },
  submitButton: {
    marginLeft: horizontalScale(7),
    borderRadius: 4,
  },
  matrixInfoText: {
    color: theme.color.black,
    fontSize: moderateScale(16),
    marginVertical: verticalScale(10),
  },
  matrixContainer: {
    justifyContent: 'center',
  },
  button: {
    width: horizontalScale(50),
    height: verticalScale(50),
    margin: moderateScale(5),
    backgroundColor: theme.color.gray,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 4,
  },
  filledButton: {
    backgroundColor: theme.color.blue,
  },
  defaultButton: {
    backgroundColor: theme.color.black01,
  },
  changeButtonContainer: {
    marginTop: verticalScale(15),
  },
});

export default HomeScreen;
