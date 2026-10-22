import type { ReactNode } from "react";
import s from "./PageWrapper.module.scss";

interface PageWrapperProps {
	children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
	return (
		<div className={s.wrapper_PageWrapper}>
			<div className={s.content_PageWrapper}>{children}</div>
		</div>
	);
};
