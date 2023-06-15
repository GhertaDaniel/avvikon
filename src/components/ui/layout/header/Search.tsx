import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Search: FC = () => {
	const [inputFocus, setInputFocus] = useState(false)
	const [inputValue, setInputValue] = useState('')
	const router = useRouter()

	const onKeyPress = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
		console.log(event)

		if (inputFocus && event.key === 'Enter') {
			router.push(`/q?term=${inputValue}`)
		}
	}

	return (
		<span className='flex items-center'>
			<input
				type='text'
				onFocus={() => setInputFocus(true)}
				onBlur={() => setInputFocus(false)}
				onChange={e => setInputValue(e.target.value)}
				placeholder='Search...'
				className={cn(
					'bg-[#1E2833] outline-none px-4 py-2 rounded-s-xl text-sm w-[120px] xs:w-[200px] xl:w-[400px] text-white'
				)}
			/>
			<Link
				onKeyDown={onKeyPress}
				href={`/q?term=${inputValue}`}
				className='text-2xl text-white bg-primary py-1.5 px-2 xs:	rounded-e-lg mr-8 sm:mr-0 xs:rounded-lg'
			>
				<AiOutlineSearch />
			</Link>
		</span>
	)
}

export default Search
