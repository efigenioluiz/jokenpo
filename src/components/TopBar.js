import React from 'react';
import { StyleSheet, View, Button, ScrollView, Alert, Text, TouchableOpacity, Image } from 'react-native';

const TopBar = (props) => {
    
    return (
            <View style={styles.container}>

            <TouchableOpacity onPress={ () => props.onPress(0) } >
                        <Text style={styles.game}>GAME </Text>
            </TouchableOpacity>
            

            <View style={{width: 260,height:44}}></View>

            <View style={{alignItems: "center"}}>
                <TouchableOpacity onPress={()=>props.onPress(1)}>
                    <Image source={require('../../img/reset.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000',
    height:33,
},
game:{
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#fff',
    fontSize: 20,
}
});

export default TopBar;