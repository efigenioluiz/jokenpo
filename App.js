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
      peca2:0,
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
  whoWinner(player,android){
    if((player == 1) && ( android == 4 || android == 3 ) ){
      this.addpt(0);
    }else if((player == 1) && ( android == 5 || android == 2)){
      this.addpt(1);
    }else if((player == 2) && ( android == 3 || android == 1)){
      this.addpt(0);
    }
    else if((player == 2) && ( android == 4 || android == 5)){
      this.addpt(1);
    }
    else if((player == 3) && ( android == 4 || android == 5)){
      this.addpt(0);
    }
    else if((player == 3) && ( android == 1 || android == 2)){
      this.addpt(1);
    }
    else if((player == 4) && ( android == 2 || android == 5)){
      this.addpt(0);
    }
    else if((player == 4) && ( android == 1 || android == 3)){
      this.addpt(1);
    }

    else if((player == 5) && ( android == 1 || android == 2)){
      this.addpt(0);
    }
    else if((player == 5) && ( android == 3 || android == 4)){
      this.addpt(1);
    }

  }
  addpt(id){
    if(id == 0){
      this.setState({
        pontosPlayer: this.state.pontosPlayer+1,
      });
    }else if(id == 1){
      this.setState({
        pontosAndroid: this.state.pontosAndroid+1,
      }); 
    }
    
  }
  selectImage(val,val2 ){
    this.setState({
      peca: val,
      peca2: val2,
    });
  }
  seed() {
    return Math.floor((1+Math.random() * 5));
  }
  runGame(val){
    aleatorio= this.seed();


    this.selectImage(val,aleatorio);
    this.swhoWinner(val,aleatorio);
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
        
        <IconsBut  onPress={(val)=> this.runGame(val) }  />
        
        <ArenaBattle pca={this.state.peca} pca2={this.state.peca2} ptp={this.state.pontosPlayer}  pa={this.state.pontosAndroid}/>
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
