import {ThemeToggleWrapper, ToggleButton} from "./styles";

const ThemeToggle = ({ toggleTheme }) => {

	return (
		<ThemeToggleWrapper>
			<ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>
		</ThemeToggleWrapper>
	)

}

export default ThemeToggle;
