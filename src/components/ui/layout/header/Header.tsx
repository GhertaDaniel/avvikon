import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, FC, SetStateAction } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import HeaderProfile from './HeaderProfile'
import Search from './Search'
import HeaderCart from './cart/HeaderCart'

interface IHeader {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Header: FC<IHeader> = ({ isOpen, setIsOpen }) => {
	return (
		<header className='bg-secondary w-full px-6 py-3 grid grid-cols-[1fr_1fr] md:grid-cols-3 lg:grid-cols-[1fr_2fr_1.2fr] xl:grid-cols-[1fr_3fr_1.2fr]'>
			<button
				className='w-max block md:hidden'
				onClick={() => setIsOpen(!isOpen)}
			>
				<svg
					className='w-6 h-6'
					aria-hidden='true'
					fill='#fff'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						clipRule='evenodd'
						fillRule='evenodd'
						d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
					></path>
				</svg>
			</button>
			<Link href='/' className='hidden md:block'>
				<Image
					priority
					width={180}
					height={37}
					src='/images/logo.svg'
					alt='Avvikon'
				/>
			</Link>
			<Search />
			<div className='hidden md:flex items-center justify-end gap-4 md:gap-10'>
				<Link href='/favorites' className='text-white'>
					<AiOutlineHeart size={28} />
				</Link>
				<HeaderCart />
				<HeaderProfile />
			</div>
		</header>
	)
}

export default Header
