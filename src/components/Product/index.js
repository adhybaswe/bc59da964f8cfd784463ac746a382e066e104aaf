import React from 'react'
import styled from 'styled-components'
import Rating from '../Rating'
import Button from '../Button'

const Wrapper = styled.div`
  border:1px solid #eee;
  overflow:hidden;
  margin:16px;
  border-radius:8px;
  box-shadow:0 8px 10px 0 rgba(10, 31, 68, 0.1);
`;

const Content = styled.div`
  padding:16px;
`;

const ContentTitle = styled.h3`
  margin-top:8px;
  margin-bottom:4px;
`;

const ContentBottom = styled.div`
	display:flex;
	align-items:center;
	flex-direction:row;
	margin-top:16px;
`;

const Price = styled.div`
	width:70%;
	font-weight:800;
`;

const Meta = styled.div`
	color:#6e7679;
	display:flex;
	font-size:0.8rem;
`;

const MetaAutor = styled.div`
	position: relative;
	margin-right:24px;
	&:before{
		content: '';
		width: 5px;
		right: -15px;
		top: 7px;
		height: 5px;
		border-radius: 50%;
		background-color: #6e7679;
		position: absolute;
	}
`;

const MetaCategory = styled.div`
	
`;

const FeaturedImage = styled.img`
	width:100%;
`

const Product = ({image,title,category,author,price,rating, onAdd}) => {
	return(
		<Wrapper>
			<FeaturedImage src={image} alt={title} />
			<Content>
				<Rating percent={rating} />
				<ContentTitle>{title}</ContentTitle>
				<Meta>
					<MetaAutor>{author}</MetaAutor>
					<MetaCategory>{category}</MetaCategory>
				</Meta>
				<ContentBottom>
					<Price>Rp {price}</Price>
					<Button onClick={onAdd} />
				</ContentBottom>
			</Content>
		</Wrapper>
	)
}

export default Product
