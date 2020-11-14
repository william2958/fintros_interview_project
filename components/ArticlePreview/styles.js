import styled, { css } from 'styled-components';

export const ArticlePreviewWrapper = styled.div`
	
	display: flex;
	width: 80%;
	margin: 0 auto;
	padding: 1.5em 0 2em 0;
	
	& + & {
		border-top: 2px solid ${({theme}) => theme.border};
	}
	
	@media (max-width: 1024px) {
	  flex-direction: column;
	}
	
`;

export const ArticleContent = styled.div`
	margin-top: -1.5em;
	margin-left: 4.2%;
	
	@media (max-width: 1024px) {
	  margin-left: 0;
	}
`;

export const ArticlePreviewImage = styled.div`
	background-image: url(${({image}) => image});
  background-size: cover;
  background-position: center 25%;
  background-repeat: no-repeat;
  margin-bottom: 2rem;
  width: 33%;
  min-width: 33%;
  height: 15.5rem;
  
  ${({image, theme}) => !image && css`background-color: ${theme.highlight}`};
  
  @media (min-width: 768px) {
  	height: 28.75rem;
  }
  @media (max-width: 1024px) {
    width: 100%;
    min-width: 100%;
	}
`;

export const ArticleType = styled.a`
	border-bottom: 0.125rem solid transparent;
  font-weight: 600;
  letter-spacing: 0.125em;
  line-height: 1;
  padding-bottom: 0.25rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 100ms ease-in 0s;
  font-size: 0.75rem;
  color: ${({theme}) => theme.highlight};
  cursor: pointer;
  
  &:hover {
    border-color: ${({theme}) => theme.highlight};
  }
`;
