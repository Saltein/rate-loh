import s from "./TestPage.module.scss";
import { PageWrapper, WidgetWrapper } from "../../shared";

export const TestPage = () => {
	return (
		<PageWrapper>
			Test Page
			<WidgetWrapper>widget <img src="https://via.placeholder.com/150" alt="placeholder" /></WidgetWrapper>
		</PageWrapper>
	);
};
