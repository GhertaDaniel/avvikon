import { FC, PropsWithChildren, useState } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(true)

	return (
		<div>
			<Header isOpen={isOpen} setIsOpen={setIsOpen} />
			<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
			<div className='grid grid-cols-1'>
				<main className='pt-6 ml-0 md:ml-60 lg:ml-80 md:pt-12'>{children}</main>
			</div>
		</div>
	)
}

export default Layout
