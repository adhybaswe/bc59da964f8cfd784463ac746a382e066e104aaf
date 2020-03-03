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
	flex-direction:row;
`;

const Price = styled.div`
	width:70%;
`;

const Meta = styled.div`
	color:#6e7679;
	display:flex;
`;

const MetaAutor = styled.div`
	
`;

const MetaCategory = styled.div`
	
`;

const FeaturedImage = styled.img`
	width:100%;
`

const Product = ({image,title,category,author,price,rating}) => {
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
					<Button />
				</ContentBottom>
			</Content>
		</Wrapper>
	)
}

export default Product
