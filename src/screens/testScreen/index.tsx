import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Button from '../../components/button';
import TaskManager from '../../realm/services/TaskService';

const TestScreen = () => {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

  return (
    <View>
        <TextInput
            placeholder='title'
            onChangeText={(text) => {setTitle(text)}}
        />

        <TextInput
            placeholder='description'
            onChangeText={(text) => {setDescription(text)}}
        />

        <Button
            content='Add Task'
            onPress={() => {
                TaskManager.addTask(title, description);
                setTitle('');
                setDescription('');
                // console.log(TaskManager.getTask());
                console.log('Path: ', TaskManager.getPath());
            }}
        />
    </View>
  )
}

export default TestScreen

const styles = StyleSheet.create({})