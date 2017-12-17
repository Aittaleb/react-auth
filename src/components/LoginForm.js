import React , {Component} from 'react';
import {View ,TextInput , Text } from 'react-native';
import { Button ,Card  , CardSection , Input , Spinner } from './common';
import firebase from 'firebase';

   

class LoginForm extends Component {
    state = { email : '', password : '', error : '',loading : false};
 
    componentWillMount()
    {
        //debugger;
    }

    onButtonPress()
    {

            const {email , password , error } = this.state ;
            this.setState({error : '' , loading : true});
           
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(
            this.onLoginSuccess.bind(this)
        )
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email,password)
                        .then(
                        this.onLoginSuccess.bind(this)
                    )
            .catch(()=>{
                //console.log("Error creating user");
                this.onLoginFailure.bind(this)
            })
        });

    }

    renderButton () {
        if (this.state.loading)
        { return <Spinner size = "small" />; }
       
                return (<Button
                                     onPress = {this.onButtonPress.bind(this)} >
                                      Log In 
                </Button>) ;

       
    }

    onLoginFailure() 
    {
        this.setState({
            error : 'Login Error',
            loading : false
        })

       
    }
    
    onLoginSuccess()
    {
        this.setState({
            error : '',
            email : '',
            password : '',
            loading : false
        
        });

         //debugger;
    }

    render()
    {
      const {email , password , error } = this.state ;
      return (
         <Card>
                <CardSection  >
                    <Input 
                        placeholder = {"user@gmail.com"}
                        label = {'Login'}
                        value = {this.state.email }
                        onChangeText = { email => this.setState({email}) }
                     />
                </CardSection>

                <CardSection>
                        <Input 
                        placeholder = {"*********"}
                        label = {'Password'}
                        value = {this.state.password }
                        onChangeText = { password => this.setState({password})  }
                         secureTextEntry
                     />
                </CardSection>

                <Text style ={ styles.errorStyle }> {error} </Text>
                
               <CardSection> 
                                     {this.renderButton()}


               </CardSection>
                </Card>

        
      );  
    };
}

const styles = {
    errorStyle : {
        color : 'red',
        fontSize : 20,
        alignSelf : 'center',


    }
}

export default LoginForm ;