import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Header = (props) => {

	if(props.imgp == 0) {
		return (
			<View style={styles.main}> 
				<Image
				source={ require('../../img/header_p.png') }
				style={ styles.imagem }
				/>
			</View>		
	    );
				} else if (props.imgp==1) {
					return (
						<View style={styles.main}> 
							<Image
							source={ require('../../img/regra.png') }
							style={ styles.imagem }
							/>
						</View>	
						);    
				}else{                          
					return (
						<View style={styles.main}> 
							<Image
							source={ require('../../img/header_p.png') }
							style={ styles.imagem }
							/>
						</View>	
						); 
				}
}

const styles = StyleSheet.create({

	main: {
	    flex: 1,
	    flexDirection: 'row',
	    borderColor: '#000',
	    margin: 5,
	    padding: 1,
	    borderWidth: 3,
	    height: 230,
	  },
	imagem: {
		height: 222,
		flex: 1,
		resizeMode: 'stretch',
	}
});

export default Header;







/*

if(props.val == 0) {
		return (
			<View style={styles.main}> 
	          <Image
	            source={ require('../../img/header_p.png') }
	            style={ styles.imagem }
	          />
	        </View>		
	    );
	}

	*/