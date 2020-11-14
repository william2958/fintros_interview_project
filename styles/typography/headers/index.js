import styled from 'styled-components';
import {TypoStyles} from "../styles";

export const H1 = styled.h1`
	${TypoStyles};
	
	font-size: 2rem;
	line-height: 1.25;
	
	@media (min-width: 360px) {
		font-size: calc(2rem + (16 * (100vw - 360px)) / 407)
	}
	
	@media (min-width: 768px) {
    font-size: calc(3rem + (16 * (100vw - 768px)) / 671)
	}
	
`;

export const H2 = styled.h2`
	${TypoStyles};
	
	font-size: 1.25rem;
	line-height: 1.5;
	margin-bottom: 1rem;
	
	@media (min-width: 360px) {
		font-size: calc(1.25rem + (4 * (100vw - 360px)) / 407);
	}
	
	@media (min-width: 768px) {
    font-size: calc(1.5rem + (8 * (100vw - 768px)) / 671);
	}
`;
