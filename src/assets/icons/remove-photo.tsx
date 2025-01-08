import { Ref, SVGProps, forwardRef } from "react";

const RemovePhotoIcon = (
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
			<circle
				cx={"12"}
				cy={"12"}
				fill={"#CC1439"}
				r={"10"}
				stroke={"#0D0D0D"}
				strokeWidth={"4"}
			/>
			<g clipPath={"url(#clip0_23092_10749)"}>
				<path
					d={
						"M12.94 11.9998L15.8066 9.1398C15.9322 9.01426 16.0027 8.844 16.0027 8.66646C16.0027 8.48893 15.9322 8.31867 15.8066 8.19313C15.6811 8.0676 15.5108 7.99707 15.3333 7.99707C15.1558 7.99707 14.9855 8.0676 14.86 8.19313L12 11.0598L9.13996 8.19313C9.01442 8.0676 8.84416 7.99707 8.66663 7.99707C8.48909 7.99707 8.31883 8.0676 8.19329 8.19313C8.06776 8.31867 7.99723 8.48893 7.99723 8.66646C7.99723 8.844 8.06776 9.01426 8.19329 9.1398L11.06 11.9998L8.19329 14.8598C8.13081 14.9218 8.08121 14.9955 8.04737 15.0767C8.01352 15.158 7.99609 15.2451 7.99609 15.3331C7.99609 15.4211 8.01352 15.5083 8.04737 15.5895C8.08121 15.6708 8.13081 15.7445 8.19329 15.8065C8.25527 15.8689 8.329 15.9185 8.41024 15.9524C8.49148 15.9862 8.57862 16.0037 8.66663 16.0037C8.75463 16.0037 8.84177 15.9862 8.92301 15.9524C9.00425 15.9185 9.07798 15.8689 9.13996 15.8065L12 12.9398L14.86 15.8065C14.9219 15.8689 14.9957 15.9185 15.0769 15.9524C15.1581 15.9862 15.2453 16.0037 15.3333 16.0037C15.4213 16.0037 15.5084 15.9862 15.5897 15.9524C15.6709 15.9185 15.7446 15.8689 15.8066 15.8065C15.8691 15.7445 15.9187 15.6708 15.9526 15.5895C15.9864 15.5083 16.0038 15.4211 16.0038 15.3331C16.0038 15.2451 15.9864 15.158 15.9526 15.0767C15.9187 14.9955 15.8691 14.9218 15.8066 14.8598L12.94 11.9998Z"
					}
					fill={"white"}
				/>
			</g>
			<defs>
				<clipPath id={"clip0_23092_10749"}>
					<rect
						fill={"white"}
						height={"16"}
						transform={"translate(4 4)"}
						width={"16"}
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

const ForwardRef = forwardRef(RemovePhotoIcon);

export { ForwardRef as RemovePhotoIcon };
