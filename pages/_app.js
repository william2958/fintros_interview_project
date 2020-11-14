import { createGlobalStyle, ThemeProvider } from "styled-components";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "../apolloClient";
import {useState} from "react";

const GlobalStyle = createGlobalStyle`
	html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

const lightTheme = {
	primary: '#000'
}

const darkTheme = {
	primary: '#fff'
}

export default function App({ Component, pageProps }) {
	const [theme, setTheme] = useState('light');
	const toggleTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}

	return (
		<>
			<GlobalStyle />
			<ApolloProvider client={apolloClient}>
				<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
					<Component {...pageProps} toggleTheme={toggleTheme} />
				</ThemeProvider>
			</ApolloProvider>
		</>
	)
}
