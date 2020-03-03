import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 8px;
  display:flex;
  flex-direction:row;
  flex-wrap: nowrap;
  overflow-x: auto;
  border-bottom:1px solid #f1f1f2;
`;

const ItemCalendar = styled.div`
  padding: 8px;
  border-radius:50%;
  width:35px;
  height:35px;
  font-weight:500;
  flex:0 0 auto;
  display:flex;
  text-align:center;
  line-height:1;
  justify-content:center;
  align-items:center;
  font-size:1.2rem;
  flex-direction:column;
  background-color : ${props => props.active ? "#424749" : "transparent"} ; 
  color : ${props => props.active ? "#fff" : "inherit"} ; 
  span{
  	font-weight:normal;
  	font-size:0.6rem;
  	display:flex;
  }
`;

const ItemCalendarDisabled = styled(ItemCalendar)`
  color: #e2e4e4;
`;

const dummy = [ 
		'SEN-2-maret-2020',
		'SEL-3-maret-2020',
		'RAB-4-maret-2020',
		'KAM-5-maret-2020',
		'JUM-6-maret-2020',
		'SAB-7-maret-2020',
		'MIN-8-maret-2020',
		'SEN-9-maret-2020',
		'SEL-10-maret-2020',
		'RAB-11-maret-2020',
		'KAM-12-maret-2020',
		'JUM-13-maret-2020',
		'SAB-14-maret-2020',
		'MIN-15-maret-2020',
	]

const Calendar = () => {

	return(
		<Wrapper>
			{
				dummy.map( (item,index) => {
					const tmp = item.split('-')

					if(tmp[0] === "SAB" || tmp[0] === "MIN" ){
						return(
							<ItemCalendarDisabled key={index}>
								<span>{tmp[0]}</span>
								{tmp[1]}
							</ItemCalendarDisabled>
						)
					}

					if(index === 4 ){
						return(
							<ItemCalendar active key={index}>
								<span>{tmp[0]}</span>
								{tmp[1]}
							</ItemCalendar>
						)
					}

					return(
						<ItemCalendar key={index}>
							<span>{tmp[0]}</span>
							{tmp[1]}
						</ItemCalendar>
					)
				})
			}
		</Wrapper>
	)
}

export default Calendar