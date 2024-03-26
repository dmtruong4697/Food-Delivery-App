import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import Button from '../../components/button';
import TaskManager from '../../realm/services/TaskService';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

const TestScreen = gestureHandlerRootHOC(() => {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

          // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

//   callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <SafeAreaView style={{height: '90%'}}>
        <TextInput
            placeholder='title'
            onChangeText={(text) => {setTitle(text)}}
        />

        <TextInput
            placeholder='description'
            onChangeText={(text) => {setDescription(text)}}
        />

        {/* <Button
            content='Add Task'
            onPress={() => {
                TaskManager.addTask(title, description);
                setTitle('');
                setDescription('');
                // console.log(TaskManager.getTask());
                console.log('Path: ', TaskManager.getPath());
            }}
        /> */}

<BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={[100, 300]}
      >
        <BottomSheetView style={{backgroundColor: 'pink'}}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  )
}
)

export default TestScreen

const styles = StyleSheet.create({})