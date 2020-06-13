import React, {useRef} from 'react';
import {View, Text, Dimensions} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import BottomSheetContent from './BottomSheetContent';
const MAX_HEIGHT = Dimensions.get('screen').height - 100;

const BottomSheetComponent = ({openSheet, weather}) => {
  const [open, set] = React.useState(false);
  const renderContent = () => {
    if (!weather) {
      return <></>;
    }
    return <BottomSheetContent weather={weather} open={open} />;
  };

  return (
    <BottomSheet
      callbackNode={openSheet}
      snapPoints={[20, MAX_HEIGHT]}
      onOpenEnd={() => set(true)}
      onCloseEnd={() => set(false)}
      renderHeader={() => (
        <Text style={{color: 'white', textAlign: 'center'}}>^</Text>
      )}
      renderContent={renderContent}
    />
  );
};

export default BottomSheetComponent;
