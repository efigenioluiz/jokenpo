import React from 'react';
import { StyleSheet, View, Button, ScrollView, Alert, Text, TouchableOpacity, Image } from 'react-native';

class ArenaBattle extends React.Component {
         
        setIMG(pecas){
            if(pecas == 1){
                return require('../../img/pedra_vs.png');
            }else if (pecas == 2) {
                return require('../../img/spock_vs.png');
            } else if (pecas == 3){
                return require('../../img/tesoura_vs.png');
            }else if(pecas == 4){
                return require('../../img/lagarto_vs.png');
            }else if(pecas == 5){
                return require('../../img/papel_vs.png');
            }
        }   
        render(){
                let pontosPlayer= this.props.ptp;
                let pontosAndroid = this.props.pa; 

                if((this.props.pca == 0) &&  (this.props.pca2 == 0) ){    
                    direita=this.setIMG(5);
                    esquerda=this.setIMG(1);
                }else{
                    esquerda=this.setIMG(this.props.pca);
                    direita=this.setIMG(this.props.pca2);    
                }
            
                // async function demo() {
                //             var a = Math.floor((Math.random() * 4) + 0);
                //             let cout= 0;
                //             while(count != 15) {
                //                         await  sleep(2000);
                //                         // trocaImagem();
                //             } 
                // }
                // function sleep(ms) {
                //             return new Promise(resolve => setTimeout(resolve, ms));
                // } */
                return (
                    <View style={styles.arena}>
                    <Image source={require('../../img/bar_versus2.png') }
                                style={{ height: 70, width: 335}}
                    />

                    <View style={styles.arenaCenter}>
                    
                        <View style={styles.intensDireito}>
                                        <Image source={esquerda}
                                        style={{ height: 84, width: 84 }}
                                        />
                        </View>
                                
                        <View style={styles.vs}>
                                        <Image source={require('../../img/versus.png')}
                                        style={{ height: 50, width: 80 }}
                                        />
                        </View>

                        <View style={styles.intensDireito}>
                                        <Image source={direita}
                                        style={{ height: 84, width: 84 }}
                                        />
                        </View>

                    </View>

                    <View style={styles.arenaFloor}>

                        <View style={styles.boxPontosPlayer}>
                                        <Text  style={{fontSize:33}}>{pontosPlayer}</Text> 
                        </View>

                        <View style={{width: 120,height:44}}></View>

                            <View style={styles.boxPontosAndroid}>
                                        <Text style={{ fontSize: 33 }}>  {pontosAndroid} </Text> 
                            </View>

                        </View>                                       
                    </View>

                );
    }
}

const styles = StyleSheet.create({
    arena: {
        height: 229,
        width: 337,
        borderColor: '#000',
        backgroundColor: '#fff',
        margin: 10,
        padding: 5,
        alignItems: 'center',
    },
    vs:{
        paddingTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight:20,
    },
    intensDireito: {
        flexDirection: 'row-reverse',

    },
    arenaCenter:{
        flexDirection: 'row',
    },
    arenaFloor: {
        flexDirection: 'row',
    }, 
    boxPontosPlayer: {
        alignItems: 'center',
        height: 44,
        width: 84,
        backgroundColor: '#B54C9F',
        borderRadius: 100,
    } ,
    boxPontosAndroid: {
        alignItems: 'center',
        height: 44,
        width: 84,
        backgroundColor: '#B54C9F',
        borderRadius: 100,
    } 

});

export default ArenaBattle;