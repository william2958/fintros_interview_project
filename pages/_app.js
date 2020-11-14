import { createGlobalStyle, ThemeProvider } from "styled-components";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "../apolloClient";
import {useState} from "react";

const GlobalStyle = createGlobalStyle`
	html,
  body {
    padding: 0;
    margin: 0;
    font-family: SofiaProWeb, Helvetica, Arial, sans-serif;
    background-color: ${({theme})=> theme.background};
  }

  * {
    box-sizing: border-box;
  }
`;

const lightTheme = {
	primary: '#000',
	secondary: '#ddd',
	highlight: '#cc835c',
	border: '#EBDED2',
	background: '#fbf8f5'
}

const darkTheme = {
	primary: '#fff',
	secondary: '#ddd',
	highlight: '#cc835c',
	border: '#EBDED2',
	background: '#111'
}

export default function App({ Component, pageProps }) {
	const [theme, setTheme] = useState('light');
	const toggleTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}

	return (
		<>
			<ApolloProvider client={apolloClient}>
				<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
					<GlobalStyle />
					<Component {...pageProps} toggleTheme={toggleTheme} />
				</ThemeProvider>
			</ApolloProvider>
		</>
	)
}
