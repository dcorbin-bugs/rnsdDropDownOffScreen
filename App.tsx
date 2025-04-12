/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const data = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot'];

function Pick6(props: {y: number; label: string}) {
  return (
    <SelectDropdown
      data={data}
      renderButton={() => {
        return (
          <View style={{left: 150, top: props.y, backgroundColor: '#fcc'}}>
            <Text style={{fontSize: 40}}>{props.label}</Text>
          </View>
        );
      }}
      renderItem={(item, index, isSelected) => {
        return (
          <View style={{backgroundColor: isSelected ? '#ccf' : '#fff'}}>
            <Text style={{fontSize: 40}}>{item}</Text>
          </View>
        );
      }}
      onSelect={(item, index) => {
        console.log(`Selected; ${item} @ ${index}`);
      }}
    />
  );
}

function App(): React.JSX.Element {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#ccc',
      }}>
      <Pick6 y={200} label={'works'} />
      <Pick6 y={420} label={'broken'} />
    </View>
  );
}

export default App;
