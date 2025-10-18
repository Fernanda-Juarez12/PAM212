import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './botones/BotonesScreen';
import Botones from './botones/Botones';
import TextScreen from './TextScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import BottomSheetScreen from './BottomSheetScreen';

export default function MenuScreen() {
    const [screen, setScreen]=useState('menu');

    switch(screen){
        case 'Contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'botones 2':
            return <Botones/>;

        case 'TextInput':
        return <TextScreen/>;
    
        case 'ImageBackground':
            return <ImageBackgroundScreen />;
        case 'ScrollView':
            return <ScrollViewScreen />;
        case 'ActivityIndicator':
            return <ActivityIndicatorScreen />;
        case 'FlatList':
            return <FlatListScreen />;
        case 'Modal':
            return <ModalScreen />;
        case 'BottomSheet':
            return <BottomSheetScreen />;


        case 'menu':
            default:
                 return (
                    <View style={styles.container}>
                    <Text>Menú de Prácticas</Text>
                    <Button onPress={()=>setScreen('Contador')} title='Pract:Contador'/>
                    <Button onPress={()=>setScreen('botones')}  title='Pract:Botones'/>
                    <Button onPress={()=>setScreen('botones 2')}  title='Pract:Botones2'/>
                    <Button onPress={()=>setScreen('TextInput')} title='Pract:TextInput'/>
                    <Button onPress={()=>setScreen('ImageBackground')}  title='Pract:ImageBackground'/>
                    <Button onPress={()=>setScreen('ScrollView')} title='Pract:ScrollView'/>
                    <Button onPress={()=>setScreen('ActivityIndicator')}  title='Pract:ActivityIndicator'/>
                    <Button onPress={()=>setScreen('FlatList')} title='Pract:FlatList'/>
                    <Button onPress={()=>setScreen('Modal')}  title='Pract:Modal'/>
                    <Button onPress={()=>setScreen('BottomSheet')}  title='Pract:Bottom Sheet'/>
                    </View>
                
                 )
    }
    
  }

const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor: '#eda6f0ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
    gap:10,
      }
    })