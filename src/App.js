import { useState } from "react";
import "./styles.css";

export default function App() {
	const [fomula, setFormula] = useState("130/(3+7)x5)");

	const handleChange = (e) => {};
	const handleClick = (e) => {};
	return (
		<div className="App">
			<input type="text" value={fomula} onChange={handleChange}></input>
			<button onClick={handleClick}>Calculate</button>
		</div>
	);
}
