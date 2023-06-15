import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { CategoryService } from '@/services/category.service'
import Loader from '@/ui/Loader'
import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { FiLogOut } from 'react-icons/fi'

interface ISidebar {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Sidebar: FC<ISidebar> = ({ isOpen, setIsOpen }) => {
	const { data, isLoading } = useQuery(
		['get categories'],
		() => CategoryService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	const { asPath } = useRouter()

	const { user } = useAuth()
	const { logout } = useActions()

	React.useEffect(() => {
		function handleResize() {
			if (window.innerWidth < 768) {
				setIsOpen(false)
			} else setIsOpen(true)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<aside
			className={cn(
				`bg-secondary fixed transition-transform w-max pr-10 md:pr-12 xl:pr-20 ${
					isOpen ? 'sm:translate-x-0' : '-translate-x-full'
				} h-full z-40`
			)}
		>
			<div>
				{isLoading ? (
					<Loader />
				) : data ? (
					<>
						<div className='text-xl text-white mt-4 mb-6 ml-6'>
							Categories: 👇
						</div>
						<ul>
							{data.map(category => (
								<li key={category.id}>
									<Link
										className={cn(
											'block text-sm sm:text-md lg:text-xl xl:text-xl my-3 px-10 hover:text-primary transition-colors duration-200',
											asPath === `/category/${category.slug}`
												? 'text-primary'
												: 'text-white'
										)}
										href={`/category/${category.slug}`}
									>
										{category.name}
									</Link>
								</li>
							))}
						</ul>
					</>
				) : (
					<div> Categories not found! </div>
				)}
			</div>

			{!!user && (
				<button
					className='text-white flex items-center ml-10 mb-10'
					onClick={() => logout()}
				>
					<FiLogOut />
					<span className='ml-2'>Logout</span>
				</button>
			)}
		</aside>
	)
}

export default Sidebar
