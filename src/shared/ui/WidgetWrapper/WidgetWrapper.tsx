import type { ReactNode } from "react";
import s from "./WidgetWrapper.module.scss";

interface WidgetWrapperProps {
	children: ReactNode;
    horizontal?: boolean;
}

export const WidgetWrapper = ({ children }: WidgetWrapperProps) => {
	return <div className={s.wrapper_WidgetWrapper}>{children}</div>;
};
