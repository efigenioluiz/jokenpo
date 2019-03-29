import React from 'react';
import { StyleSheet, View, Button, ScrollView, Alert, Text, TouchableOpacity, Image } from 'react-native';

const TopBar = (props) => {

        return (
             <View style={styles.container}>

              <TouchableOpacity onPress={ () => props.onPress() } >
                          <Text style={styles.game}>GAME </Text>
             </TouchableOpacity>
             

             <View style={{width: 260,height:44}}></View>

             <View style={{alignItems: "center"}}>
                    <TouchableOpacity onPress={() => alert("Resetou o o game com sucesso!")}>
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