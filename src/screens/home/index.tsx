import React from 'react';
import { Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { MainWrapper } from '../../components/wrappers';
import { actions } from '../../store';
import styles from './styles';

const HomeScreen = (props) => {
    const { navigation, token, login } = props;

    return(
        <MainWrapper>
            <Text>Home Screen !!!!</Text>
            <Text style={styles.normalText}>{ token && token }</Text>
            <Button title="Details" onPress={() => { navigation.navigate('Details'); }}/>
            <Button title="login"   onPress={() => { login(); }}/>
        </MainWrapper>
    )
}

const mapStateToProps = (state) => ({
    token: state.user.token,
});

const mapDispatchToProps = (dispatch) => ({
    login: () => { dispatch(actions.setToken()) },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);