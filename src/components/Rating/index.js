import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display:flex;
  flex-direction:row;
  color:#6e7679;
  font-weight:500;
`;

const Star = styled.div`
	display: inline-block;
	line-height: 1;
	
	&:after {
		margin-left:4px;
		content: '★★★★★';
		letter-spacing: 3px;
		background: linear-gradient(90deg, #f9423a calc(${props => props.percent || "1"} / 5 * 100%), #eee  calc(${props => props.percent || "1"} / 5 * 100%) );
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	&:before {
		font-weight:700;
	  	content: '${props => props.percent || "1"}';
	}
`;


const Rating = ({percent}) => {
	return(
		<Wrapper>
			 <Star percent={ percent } />
		</Wrapper>
	)
}

export default Rating
