import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  padding: 8px 16px;
  text-align:center;
  background-color:#f9423a;
  color:#fff;
  border-radius:4px;
  border:none;
`;

const Button = ({onClick}) => {
	return(
		<Wrapper onClick={onClick}>
			ADD +
		</Wrapper>
	)
}

export default Button