import React, { Component } from 'react';
import Gallery from './Gallery';
import { Redirect } from "react-router-dom";
import ImageDetail from './ImageDetail';

export default class GalleryPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			test: 'hi',
			data: ['temps'],
			redirect: false
		}
		
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		fetch('http://circuslabs.net/~michele.james/php/handle_fetch.php?type=gallery',{

			method: 'GET',
			headers: {
			},
		})
		.then( response => response.json())
		.then(json => (

				this.setState({
					data:json,
				})

			)
		);
	}
	handleClick(id) {
		var redirect =true;
		console.log("handleClick", id, this.props)
		this.props.setDetail(id,redirect);
	}



	render() {
		const {data} = this.state;
		console.log(this.state.data);


		return(
			<ul>
			{this.state.data.map(item =>
				<Link to="/Detail" ><Gallery handleClick ={() => this.handleClick(item.id)} key={item.id} {...item} />)}
			</ul>
			);
	}
}
// GalleryPage.defaultProps = {
//   redirect; false
// }

 