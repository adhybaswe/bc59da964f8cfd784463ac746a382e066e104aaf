import React, {useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position:fixed;
  height:100vh;
  z-index:99;
  display:${props => props.active ? "flex" : "none"};
  top:0;
  left:0;
  width:100%;
  background:rgba(0,0,0,0.5);
  align-items:flex-end;
`;

const Content = styled.div`
	position: relative;
	padding:16px;
	background: #fff;
	width: 100%;
	height: 78vh;
	border-radius:8px 8px 0 0;
`;

const Title = styled.h3`
	font-size:1.3rem;
`;

const InputGroup = styled.div`
	display:flex;
	border:1px solid #eee;
	padding:8px;
	border-radius:4px;
`;

const ListLocation = styled.div`
	display:block;
`;

const ItemLocation = styled.div`
	display:flex;
	flex-direction:row;
	margin-top:8px;
	margin-bottom:8px;
`;

const ItemLocationIconContainer = styled.div`
	padding:8px;
`;

const CloseModal = styled.button`
	border:none;
	float: right;
    background: transparent;
    font-size: 1rem;
`;

const ItemLocationIcon = styled.div`
	width:30px;
	height:30px;
	border-radius:50%;
	background:#eee;
	display:flex;
	    align-items: center;
    justify-content: center;
`;

const ItemLocationContent = styled.div`
	border-bottom:1px solid #eee;
	padding-bottom:8px;
	& > strong{
		display:block;
	}
	& > span{
		font-size:0.8rem;
		white-space: nowrap;
	}
`;

const Input = styled.input`
	border:none;
	width:100%;
	margin-left:8px;
`;

const dummy = [
	{
		title : "Kulina",
		description : "Jalan Tulodong Atas 28, Senayan, Kebayoran Baru"
	},
	{
		title : "Pancoran Riverside Appertment",
		description : "Jalan Tulodong Atas 28, Senayan, Kebayoran Baru"
	},
	{
		title : "Jalan Tulodong Atas 28",
		description : "Jalan Tulodong Atas 28, Senayan, Kebayoran Baru"
	},
	{
		title : "Block71 Jakarta",
		description : "Jalan Tulodong Atas 28, Senayan, Kebayoran Baru"
	},
]

const Modal = ({active,onclose}) => {
	const [search,setSearch] = useState("")

	const onChange = (event) => {		
		setSearch(event.target.value)
	}

	return(
		<Wrapper active={active}>
			<Content>
				<CloseModal onClick={onclose}>X</CloseModal>
				<Title>
					Cek makanan yang tersedia di lokasi kamu!
				</Title>
				<InputGroup>
					<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#f9423a" /><path d="M0 0h24v24H0z" fill="none"/></svg>
					<Input onChange={onChange} placeholder="Lokasi Kamu Sekarang" />
				</InputGroup>
				{
					search.length >= 3 ?
					<ListLocation>
						{
							dummy.map( (item,index) => {
								return(
									<ItemLocation key={index}>
										<ItemLocationIconContainer>
											<ItemLocationIcon>
												<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#fff" /><path d="M0 0h24v24H0z" fill="none"/></svg>
											</ItemLocationIcon>
										</ItemLocationIconContainer>
										<ItemLocationContent>
											<strong>{item.title}</strong>
											<span>{item.description}</span>
										</ItemLocationContent>
									</ItemLocation>
								)
							})
						}
					</ListLocation>
					: null
				}
			</Content>
		</Wrapper>
	)
}

export default Modal