import { ThemeProvider } from "styled-components";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "../apolloClient";
import {useState} from "react";
import GlobalStyle from "styles/globalStyles";
import lightTheme from "styles/themes/light";
import darkTheme from "styles/themes/dark";

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
