import React, {Component} from 'react';
import { StyleSheet, View, Button, ScrollView, Alert,Text,TouchableOpacity, Image} from 'react-native';
import Header from './src/components/Header';
import IconsBut from './src/components/IconsBut';
import TopBar from './src/components/TopBar';
import ArenaBattle from './src/components/ArenaBattle';

export default class App extends Component {
 
   constructor(props) {
    
    super(props);
  
    this.state = {
      estadoP:0,   
      pontosPlayer:0,
      pontosAndroid:0, 
      peca:0,
    };
}

  veri(){
    if ( this.state.estadoP == 1) {
      this.setState({
        estadoP: 0,
    });
    } else{
      this.setState({
        estadoP: 1,
        });                  
    }
  }
  addpt(){
    this.setState({
      pontosPlayer: this.state.pontosPlayer+1,
    });
  }

  selectImage(val ){
    this.setState({
      peca: val,
    });
  }
  gera() {
    return Math.floor((1+Math.random() * 5))
  }
  render() {
    return (
      <ScrollView style={styles.main}> 
        <TopBar   onPress={ ()=> this.veri() }/>

        <View style={ { margin: 4 } }>
                    
        <TouchableOpacity onPress={ () => this.veri() }>
          <Header imgp={this.state.estadoP} />
        </TouchableOpacity>

        </View>      
        
        <IconsBut  onPress={ (val) => this.selectImage(val) }  />
        
        <ArenaBattle addpt={()=>this.addpt()} ptp={this.state.pontosPlayer}  pa={this.state.pontosAndroid}/>
      </ScrollView> 
    ); 
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#B54C9F',
    marginTop: 24,
  },
});
