import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Spec from './Spec'
import styled from 'styled-components';

const SpecWrap = styled.div`
	display:flex;
	flex-wrap:wrap;
	> h1 {
		width:40%;
	}
	:before {
		padding-top: 20px;
	    width: 100%;
	    content: "";
    	border-bottom: 1px solid rgba(5,5,5,0.5);
	}
	>h1 {

		padding-top:20px;
		font-size: calc(2rem + (7 - 6) * (100vw - 76.8rem)/ (110 - 76.8));

		 @media (max-width: 600px) {
    		width: 100%;
      		font-size: calc(3rem + (7 - 6) * (100vw - 76.8rem)/ (110 - 76.8))

    	}
	}

	> div {
		padding-top:20px;
	}
	
`
const Block = styled.div`
	width:80%;
	margin:0 auto;

`
const ListWrap = styled.div`
	width:60%;
	display:flex;
	flex-direction:column;

	@media (max-width: 600px) {
		
			width: 100%;

		}
`
const Name = styled.div`
	display:flex;
	flex-wrap:wrap;
	> h1 {
		width:40%;
	}
	:before {
		padding-top: 20px;
	    width: 100%;
	    content: "";
    	border-bottom: 1px solid rgba(5,5,5,0.5);
	}
`




export default class SpecList extends Component {
	render(){
		console.log(this.props.data)
		return(
				<Block>
					<Name>
						<h1>{this.props.name} Specifications</h1>
					</Name>
					{this.props.data.map(cat =>
						<SpecWrap>
							<h1>{cat.name}</h1>
							<ListWrap>
							{cat.list.map(spec =>
								<Spec id={spec.id} key={spec.id} name={spec.name} value={spec.value} />
							)}
							</ListWrap>
						</SpecWrap>
					)}
			  	</Block>
		)
	}
}





