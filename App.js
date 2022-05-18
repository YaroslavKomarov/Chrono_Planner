import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

import NavigationStack from './Application/navigation/RootNavigator';


const fonts = () => Font.loadAsync({
    'roboto-reg': require('./Application/assets/fonts/Roboto/Roboto-Regular.ttf'),
    'roboto-bold': require('./Application/assets/fonts/Roboto/Roboto-Bold.ttf'),
    'PTSans-reg': require('./Application/assets/fonts/PT_Sans/PTSans-Regular.ttf'),
    'PTSans-bold': require('./Application/assets/fonts/PT_Sans/PTSans-Bold.ttf')
});

if (!(FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite/')).exists) {
    FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite/');
    FileSystem.downloadAsync(
        Asset.fromModule(require('./Application/assets/storage/storage.db')).uri,
        FileSystem.documentDirectory + 'SQLite/storage.db'
        );
}

//export const chrontype = "bear";

export default function App() {
    const [font, setFont] = useState(false);

    if (font){
        return (
        <NavigationStack/>
        );
    } else {
        return (
        <AppLoading 
            startAsync={fonts} 
            onFinish={() => setFont(true)}
            onError={console.warn}
        />
        );
    }
}
