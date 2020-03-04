import React from 'react'
import styled from 'styled-components'
import IcBack from '../../assets/ic_back.svg'
import Calendar from '../Calendar';

const Wrapper = styled.header`
  position:fixed;
  background:#fff;
  top:0;
  left:0;
  width:100%;
  z-index:9;
`;

const ButtonBack = styled.a`
	padding:8px;
`;

const Content = styled.div`
  	display:block;
  	color:#6e7679;
  	font-size:0.55rem;
  	margin-left:8px;
`;

const ButtonOpenModal = styled.a`
	font-weight: 700;
	cursor:pointer;
	display:block;
	font-size:1rem;
	color:#424749;
	& > svg {
		float:right;
	}
`;

const Container = styled.div`
	display:flex;
	padding: 8px;
	padding-bottom:0
  flex-direction:row;	
`

const Header = () => {
	return(
		<Wrapper>
			<Container>
				<ButtonBack>
					<img src={IcBack} alt="back" />
				</ButtonBack>
				<Content>
					ALAMAT PENGANTARAN
					<ButtonOpenModal>
						Tokopedia Tower <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" fill="#f9423a"/><path d="M0 0h24v24H0z" fill="none"/></svg>
					</ButtonOpenModal>
				</Content>
			</Container>
			<Calendar />
		</Wrapper>
	)
}

export default Header