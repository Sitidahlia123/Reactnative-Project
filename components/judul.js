import React, {Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component{
	render(){
		return (
			<Text style = {edit.Judul}>Biodata</Text>
			);
	}
}
const edit ={
	Judul:{
		color:'white',
		fontSize:50,
		fontWeight:'bold',
		backgroundColor:'pink'
	}
}
export default Judul;
