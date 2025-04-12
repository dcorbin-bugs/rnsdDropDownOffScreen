/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Text, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const data = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot'];

function App(): React.JSX.Element {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#ccc',
      }}>
      <SelectDropdown
        data={data}
        renderButton={() => {
          return (
            <View style={{left: 150, top: 420, backgroundColor: '#fcc'}}>
              <Text style={{fontSize: 40}}>Dropdown</Text>
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
    </View>
  );
}

export default App;
