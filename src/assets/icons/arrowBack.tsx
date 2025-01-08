import { Ref, SVGProps, forwardRef } from "react";

const ArrowBackIcon = (
	props: SVGProps<SVGSVGElement>,
	ref: Ref<SVGSVGElement>,
) => {
	return (
		<svg
			fill={"none"}
			height={"24"}
			ref={ref}
			viewBox={"0 0 24 24"}
			width={"24"}
			xmlns={"http://www.w3.org/2000/svg"}
			{...props}
		>
			<path
				d={
					"M13.8302 19C13.6808 19.0005 13.5332 18.9676 13.3982 18.9035C13.2632 18.8395 13.1443 18.7461 13.0502 18.63L8.22016 12.63C8.07308 12.4511 7.99268 12.2267 7.99268 11.995C7.99268 11.7634 8.07308 11.539 8.22016 11.36L13.2202 5.36003C13.3899 5.15581 13.6338 5.02739 13.8982 5.00301C14.1627 4.97863 14.4259 5.06029 14.6302 5.23003C14.8344 5.39977 14.9628 5.64368 14.9872 5.90811C15.0116 6.17253 14.9299 6.43581 14.7602 6.64003L10.2902 12L14.6102 17.36C14.7324 17.5068 14.8101 17.6856 14.834 17.8751C14.8579 18.0647 14.827 18.2571 14.7449 18.4296C14.6629 18.6021 14.5331 18.7475 14.371 18.8486C14.2089 18.9497 14.0212 19.0023 13.8302 19Z"
				}
				fill={"white"}
			/>
		</svg>
	);
};

const ForwardRef = forwardRef(ArrowBackIcon);

export { ForwardRef as ArrowBackIcon };
