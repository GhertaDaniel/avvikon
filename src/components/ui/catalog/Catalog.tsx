import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Loader from '../Loader'
import Heading from '../button/Heading'
import ProductItem from './product-item/ProductItem'

interface ICatalog {
	products: IProduct[]
	isLoading?: boolean
	title?: string
	isPagination?: boolean
}

const Catalog: FC<ICatalog> = ({
	products,
	isLoading,
	title,
	isPagination = false
}) => {
	if (isLoading) {
		return <Loader />
	}

	return (
		<section>
			<Link href='/' className='block md:hidden'>
				<Image
					priority
					width={180}
					height={37}
					src='/images/logo-black.svg'
					alt='Avvikon'
					className='block mx-auto'
				/>
			</Link>
			{title && <Heading className='mb-5'>{title}</Heading>}
			{products.length ? (
				<>
					<div className='grid grid-cols-1 sm:items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-10'>
						{products.map(product => (
							<ProductItem product={product} key={product.id} />
						))}
					</div>
				</>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default Catalog
