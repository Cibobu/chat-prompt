import { ParsedUrlQuery } from "querystring";
import { ReactNode } from "react";
// import { LangId } from "../language";

export interface ModalProps {
	icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
	imgIcon?: string;
	title?: ReactNode;
	desc?: ReactNode;
	customContent?: ReactNode;
	isWithoutTriggerBtn?: boolean;
	isFullSize?: boolean;
	okLabel?: ReactNode;
	disableOkLabel?: boolean;
	onOk?: () => void;
	cancelLabel?: ReactNode;
	onCancel?: () => void;
	closable?: boolean;
}
export type Message = {
    // id: string;
    // createdAt?: Date;
    content: string;
	role: "function" | "user" | "assistant" | "system" | string;
    /**
     * If the message has a role of `function`, the `name` field is the name of the function.
     * Otherwise, the name field should not be set.
     */
    // name?: string;
    /**
     * If the assistant role makes a function call, the `function_call` field
     * contains the function call name and arguments. Otherwise, the field should
     * not be set.
     */
    // function_call?: string ;
};
export interface GlobalStateType {
	// lang: LangId;
	isModal?: ModalProps;
	innerHeight: number;
	currentSlug?: ParsedUrlQuery;
}

// DEFAULT VALUE GLOBAL STATE
export const globalState: GlobalStateType = {
	// lang: LangId.EN,
	innerHeight: 0,
}