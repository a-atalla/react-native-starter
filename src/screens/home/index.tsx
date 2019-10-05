import React from 'react';
import { Text, Button } from 'react-native';
import { MainWrapper } from '../../components/wrappers';

const HomeScreen = (props) => {
    const { navigation } = props;
    return(
        <MainWrapper>
            <Text>Home Screen !!!!</Text>
            <Button title="Details" onPress={() => { navigation.navigate('Details'); }}/>
        </MainWrapper>
    )
}

export default HomeScreen;