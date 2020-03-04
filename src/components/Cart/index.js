import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	position:fixed;
	bottom:0;
	linear-gradient(to bottom, rgba(255, 255, 255, 0),#ffffff);
	left:0;
	width:100%;
`
const Container = styled.div`
	position:relative;
	padding:8px;
`

const Content = styled.div`
	background-color:#a23530;
	border-radius:8px;
	padding:8px;
	color:#fff;
`

const Cart = () => {
	return(
		<Wrapper>
			<Container>
			<Content>
				5 Items | Rp 125.000
				Termasuk Ongkos kirim

				<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
				<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
			</Content>
			</Container>
		</Wrapper>
	)
}

export default Cart