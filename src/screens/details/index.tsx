import React from 'react';
import { Text, Button } from 'react-native';
import { MainWrapper } from '../../components/wrappers';

const DetailsScreen = (props) => {
    const { navigation } = props;
    return(
        <MainWrapper>
            <Text>Details Screen !!!!</Text>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic aspernatur exercitationem, sequi maiores quas qui mollitia explicabo autem modi illo culpa, aut doloribus earum, repudiandae eligendi ea consequatur? Id, odio!</Text>
            <Button title="Home" onPress={() => { navigation.navigate('Home'); }}/>
        </MainWrapper>
    )
}



export default DetailsScreen;