import React , {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {Header , Button , Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

    state = { loggedIn : null };


    componentWillMount()
    {
        firebase.initializeApp({
    apiKey: 'AIzaSyBJzYYmku8_OXDThyhZjJaYtOukulGBNN0',
    authDomain: 'authentication-70db7.firebaseapp.com',
    databaseURL: 'https://authentication-70db7.firebaseio.com',
    projectId: 'authentication-70db7',
    storageBucket: 'authentication-70db7.appspot.com',
    messagingSenderId: '87613921897'
  });

 

  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        this.setState({loggedIn : true});
    }
    else 
        this.setState({loggedIn : false});

  });
    }
    
     renderLoginForm()
  {

    switch(this.state.loggedIn)
    {
        case(null) :{
            return (<View style={{paddingTop : 300}} ><Spinner size ='large' /></View>);
            break;
        };
        case(true) :
        {
            return <Button onPress = {() => { firebase.auth().signOut() }}> Log Out </Button> ;
            break;
        }
        case(false) :{
             return (<LoginForm />);
            break;
        }
    }
       
  }

    render(){

                    return (
                    <View>
                    <Header headerText = {"Authentication"} />
                    <View >
                    {this.renderLoginForm()}
                    </View>
                    </View>
                );

    };
}

export default App ;