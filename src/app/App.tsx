import s from "./App.module.scss";
import { TestPage } from "../pages";

function App() {
	return (
		<div className={s.wrapper_App}>
			<TestPage/>
		</div>
	);
}

export default App;
