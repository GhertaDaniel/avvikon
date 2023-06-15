import { ProductService } from '@/services/product/product.service'
import { EnumProductSort } from '@/services/types/product.type'
import { TypePaginationProducts } from '@/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import Loader from '../Loader'
import Button from '../button/Button'
import Heading from '../button/Heading'
import SortDropdown from './SortDropdown'
import ProductItem from './product-item/ProductItem'

interface ICatalogPagination {
	data: TypePaginationProducts
	title?: string
}

const CatalogPagination: FC<ICatalogPagination> = ({ data, title }) => {
	const [page, setPage] = useState<number>(1)

	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)

	const { data: response, isLoading } = useQuery(
		['products', sortType, page],
		() =>
			ProductService.getAll({
				page,
				perPage: 4,
				sort: sortType
			}),
		{
			initialData: data,
			keepPreviousData: true
		}
	)

	if (isLoading) return <Loader />

	return (
		<section className='px-4'>
			<Link href='/' className='block md:hidden w-max mx-auto'>
				<Image
					priority
					width={180}
					height={37}
					src='/images/logo-black.svg'
					alt='Avvikon'
				/>
			</Link>

			{title && <Heading className='mb-5'>{title}</Heading>}
			<SortDropdown sortType={sortType} setSortType={setSortType} />
			{response.products.length ? (
				<div className='container mx-auto'>
					<div className='grid grid-cols-1 sm:items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-10'>
						{response.products.map(product => (
							<ProductItem product={product} key={product.id} />
						))}
					</div>
					<div className='text-center mt-16'>
						{Array.from({ length: response.length / 4 }).map((_, index) => {
							const pageNumber = index + 1
							return (
								<Button
									key={pageNumber}
									size='sm'
									variant={page === pageNumber ? 'orange' : 'white'}
									onClick={() => setPage(pageNumber)}
									className='mx-3'
								>
									{pageNumber}
								</Button>
							)
						})}
					</div>
				</div>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default CatalogPagination
