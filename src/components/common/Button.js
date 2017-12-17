import React from 'react' ;
import {Text , TouchableOpacity } from 'react-native';

const Button = (props) =>{

    const {buttonText , onPress , children } = props ;


    const {buttonStyle , buttonTextStyle} = styles ;

    return (
        <TouchableOpacity onPress = {onPress} style = { buttonStyle }> 
            <Text style = {buttonTextStyle } >
                {children}
            </Text>
        </TouchableOpacity>
    );
};

styles = {
    buttonStyle : {
        flex: 1,
        alignSelf : 'stretch',
        backgroundColor : '#fff',
        borderColor : '#007aff',
        borderRadius : 5,
        borderWidth : 1,
        marginLeft : 5 ,
        marginRight : 5


    },
    buttonTextStyle : {
        alignSelf : 'center',
        color : '#007aff',
        fontSize : 16,
        fontWeight : '600',
        paddingTop : 10,
        paddingBottom : 10
    }
};

export {Button} ;
