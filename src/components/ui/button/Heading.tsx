import { FC, PropsWithChildren } from 'react'

interface IHeading {
	className?: string
}

const Heading: FC<PropsWithChildren<IHeading>> = ({ className, children }) => {
	return (
		<h1
			className={`font-semibold text-lg sm:text-2xl lg:text-3xl ${className}`}
		>
			{children}
		</h1>
	)
}

export default Heading
