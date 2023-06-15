import { EnumProductSort } from '@/services/types/product.type'
import { Dispatch, FC, SetStateAction } from 'react'

interface ISortDropdown {
	sortType: EnumProductSort
	setSortType: Dispatch<SetStateAction<EnumProductSort>>
}

const SortDropdown: FC<ISortDropdown> = ({ sortType, setSortType }) => {
	return (
		<div className='text-right mb-2'>
			<select
				value={sortType}
				onChange={e => setSortType(e.target.value as any)}
				className='appearance-none py-1 px-2 bg-white border-gray rounded-lg mr-4 md:mr-0'
			>
				{(
					Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
				).map(key => (
					<option key={EnumProductSort[key]} value={EnumProductSort[key]}>
						{EnumProductSort[key]}
					</option>
				))}
			</select>
		</div>
	)
}

export default SortDropdown
