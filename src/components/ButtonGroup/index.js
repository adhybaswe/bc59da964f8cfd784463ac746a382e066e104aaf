import React, {useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	border-radius:4px;
	overflow:hidden;
	display:flex;
	margin:16px;
	& button:nth-child(1){
		border-radius:4px 0 0 4px;
	}
	& button:nth-child(2){
		border-radius: 0 4px 4px 0;
	}
`;

const Button = styled.button`
	padding:8px;
	flex:1;
	border:1px solid #e2e4e4;
	background-color:${props => props.active ? "#424749" : "#fff"};
	color:${props => props.active ? "#fff" : "#e2e4e4"};
`;

const ButtonGroup = () => {
	const [active,setActive] = useState('lunch');
	const onClick = (text) => {
		setActive(text)
	}
	return(
		<Wrapper>
			<Button active={ active === "lunch" } onClick={() => onClick('lunch') }>Lunch</Button>
			<Button active={ active === "dinner" } onClick={() => onClick('dinner') }>Dinner</Button>
		</Wrapper>
	)
}

export default ButtonGroup