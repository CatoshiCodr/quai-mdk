import React, {  } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { styledColors } from '../../styles';

const windowWidth = Dimensions.get('window').width;
export const squareHoleSize = windowWidth * 0.65;
const squarePaddingRight = (windowWidth - squareHoleSize) / 2;

export const QuaiPayCamera: React.FC = () => {

  return (
    <View style={styles.cameraContainer}>
      <Text>Work In Progress</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  holeView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.6,
    backgroundColor: styledColors.black,
  }
});
