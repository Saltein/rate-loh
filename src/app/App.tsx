import s from "./App.module.scss";
import { AppRouter } from "./router/AppRouter";

function App() {
	return (
		<div className={s.wrapper_App}>
			<AppRouter />
		</div>
	);
}

export default App;
