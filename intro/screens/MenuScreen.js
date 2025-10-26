import { Text, StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './botones/BotonesScreen';
import Botones from './botones/Botones';
import TextScreen from './TextScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ScrollViewHorizontal from './ScrollViewHorizontal';
import ScrollViewVertical from './ScrollViewVertical';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import BottomSheetScreen from './BottomSheetScreen';
import Repaso1 from './Repaso1';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'Contador': return <ContadorScreen />;
    case 'botones': return <BotonesScreen />;
    case 'botones 2': return <Botones />;
    case 'TextInput': return <TextScreen />;
    case 'ImageBackground': return <ImageBackgroundScreen />;
    case 'ScrollViewHorizontal': return <ScrollViewHorizontal />;
    case 'ScrollViewVertical': return <ScrollViewVertical />;
    case 'ActivityIndicator': return <ActivityIndicatorScreen />;
    case 'FlatList': return <FlatListScreen />;
    case 'Modal': return <ModalScreen />;
    case 'BottomSheet': return <BottomSheetScreen />;
    case 'Repaso1': return <Repaso1 />;

    default:
      return (
        <View style={styles.container}>
          <Text style={styles.title}> ✨ MENÚ DE PRÁCTICAS ✨</Text>

          <Button onPress={() => setScreen('Contador')} title="Pract:Contador" color="#ff8fab" />
          <Button onPress={() => setScreen('botones')} title="Pract:Botones" color="#b3b3ffff" />
          <Button onPress={() => setScreen('botones 2')} title="Pract:Botones2" color="#ca849fff" />
          <Button onPress={() => setScreen('TextInput')} title="Pract:TextInput" color="#95d8c2ff" />
          <Button onPress={() => setScreen('ImageBackground')} title="Pract:ImageBackground" color="#a2d2ff" />
          <Button onPress={() => setScreen('ScrollViewHorizontal')} title="Pract:ScrollViewHorizontal" color="#cdb4db" />
          <Button onPress={() => setScreen('ScrollViewVertical')} title="Pract:ScrollViewVertical" color="#a8e3ebff" />          <Button onPress={() => setScreen('ActivityIndicator')} title="Pract:ActivityIndicator" color="#94a9d8ff" />
          <Button onPress={() => setScreen('FlatList')} title="Pract:FlatList" color="#dd8ba9ff" />
          <Button onPress={() => setScreen('Modal')} title="Pract:Modal" color="#96c6dbff" />
          <Button onPress={() => setScreen('BottomSheet')} title="Pract:BottomSheet" color="#c98c9dff" />
          <Button onPress={() => setScreen('Repaso1')} title="Repaso 1" color="#b780cfff" />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9e1ff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 20,
  },
  title: {
    fontSize: 45, 
    fontWeight: 'bold',
    color: '#8e24aa', 
    marginBottom: 40,
    textAlign: 'center',
    textShadowColor: '#f48fb1', // sombra 
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 8,
    letterSpacing: 2, // más espacio entre letras
  },
});
