import React from 'react';
import { StyleSheet, View, Button, ScrollView, Alert, Text, TouchableOpacity, Image } from 'react-native';

class IconsBut extends React.Component {

              render(){
                          // var numb=this.props.func();
                return (
                    <View style={styles.containerImagem}>

                        <TouchableOpacity onPress={ () => this.props.onPress(1) } >
                            <Image source={ require('../../img/pedra_vs.png')} 
                                        style={styles.imagem}
                            />
                        </TouchableOpacity> 

                        <TouchableOpacity onPress={ () => this.props.onPress(2)  }>
                            <Image source={ require('../../img/spock_vs.png')} 
                                        style={styles.imagem}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={ () => this.props.onPress(3) }>
                            <Image source={ require('../../img/tesoura_vs.png')} 
                                        style={styles.imagem}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={ () => this.props.onPress(4) }>
                            <Image source={ require('../../img/lagarto_vs.png')} 
                                        style={styles.imagem}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={ () => this.props.onPress(5) }>
                            <Image source={ require('../../img/papel_vs.png')} 
                                        style={styles.imagem}
                            />
                        </TouchableOpacity>
                        
                    </View>
                );
             }
}

const styles = StyleSheet.create({
	containerImagem: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginLeft: 5,
		marginRight: 5,

	},
	imagem: {
		width: 64, 
		height: 64
	},
});

export default IconsBut;