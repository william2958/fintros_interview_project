import { createGlobalStyle, ThemeProvider } from "styled-components";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "../apolloClient";

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

const theme = {
	palette: {
		primary: '#000'
	}
}

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ApolloProvider client={apolloClient}>
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</ApolloProvider>
		</>
	)
}
