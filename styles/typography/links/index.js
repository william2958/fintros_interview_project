import styled from 'styled-components';
import {TypoStyles} from "../styles";

export const DefaultLink = styled.a`
	${TypoStyles};
	
	cursor: pointer;
	border-bottom: 0.125rem solid ${({theme}) => theme.primary};
	font-weight: 600;
	font-size: 0.75rem;
	text-transform: uppercase;
	letter-spacing: 0.125em;
	text-decoration: none;
	
`;
