import React from 'react';
import { Text , View } from 'react-native';

const Header = (props) => {

        const{ textStyle , viewStyle } = styles ;
        
    return  (<View style= { viewStyle }>
                    <Text style= { textStyle } > {props.headerText} </Text>
             </View> ) ;
};
const styles = {

    viewStyle : {
        backgroundColor : '#ddd',
        justifyContent : 'center',
        alignItems : 'center',
        height : 60 ,
        paddingTop : 10,
        shadowColor : '#000F',
        shadowOffset : { width : 200 , height : 200 },
        shadowOpacity : 0.9,
        elevation : 2,
        position : 'relative'
    },
    textStyle : {
        fontSize : 30 
    }
}



export { Header }    ;



