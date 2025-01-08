
import type { FC } from "react";
import {EyeOnIcon} from "../../../assets/icons/eye-on-outline.tsx";
import {EyeOffIcon} from "../../../assets/icons/eye-off-outline.tsx";
import {CloseIcon} from "../../../assets/icons/close-outline.tsx";

type IconProps = {
	clear: (e: any) => void;
	isTypePassword: boolean;
	isTypeSearch: boolean;
	isViewPassword: boolean;
	switchView: () => void;
	value: string | undefined;
};
export const Icon: FC<IconProps> = ({
	clear,
	isTypePassword,
	isTypeSearch,
	isViewPassword,
	switchView,
	value,
}) => {
	if (isTypePassword) {
		return isViewPassword ? (
			<EyeOnIcon onClick={switchView} />
		) : (
			<EyeOffIcon onClick={switchView} />
		);
	}

	if (isTypeSearch && value) {
		return <CloseIcon onClick={clear} />;
	}

	return null;
};
