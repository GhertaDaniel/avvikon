import { useActions } from '@/hooks/useActions'
import { ProductService } from '@/services/product/product.service'
import { IProduct } from '@/types/product.interface'
import Meta from '@/ui/Meta'
import Button from '@/ui/button/Button'
import Heading from '@/ui/button/Heading'
import Layout from '@/ui/layout/Layout'
import { convertPrice } from '@/utils/convertPrice'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'

interface IProductPage {
	product: IProduct
}

const ProductPage: NextPage<IProductPage> = ({ product }) => {
	const [defaultImage, setDefaultImage] = useState(product.images[0])

	const { addToCart } = useActions()

	return (
		<Meta title={product.name}>
			<Layout>
				<div className='flex flex-col md:flex-row'>
					<div className='md:flex-1 px-4'>
						<div className='h-64 md:h-80 rounded-lg bg-gray-100 mb-4'>
							<Image
								alt=''
								src={product.images[0] || defaultImage}
								width={300}
								height={300}
							/>
						</div>
						<ul className='flex mb-4 gap-2'>
							{product.images.map(image => (
								<li
									key={image}
									className='px-2'
									onClick={() => setDefaultImage(image)}
								>
									<Image
										className='cursor-pointer'
										src={image}
										alt={product.name}
										width={100}
										height={100}
									/>
								</li>
							))}
						</ul>
					</div>
					<div className='md:flex-1 px-4'>
						<Heading className='mb-2 leading-tight tracking-tight md:text-3xl'>
							{product.name}
						</Heading>
						<div className='flex items-center space-x-4 my-4'>
							<div>
								<div className='rounded-lg flex py-2 px-3'>
									<span className='text-primary mr-1 mt-1 font-bold text-xl'>
										{convertPrice(product.price)}
									</span>
								</div>
							</div>
							<div className='flex-1'>
								<p className='text-primary text-lg font-semibold'>Save 12%</p>
								<p className='text-gray text-sm'>Inclusive of all Taxes.</p>
							</div>
						</div>
						<div className='text-secondary'>{product.description}</div>
						<Button
							variant='orange'
							className='mt-12'
							onClick={() =>
								addToCart({ price: product.price, product, quantity: 1 })
							}
						>
							Add to Cart
						</Button>
					</div>
				</div>
			</Layout>
		</Meta>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const products = await ProductService.getAll()

	const paths = products.products.map(product => {
		return {
			params: { slug: product.slug }
		}
	})

	return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data: product } = await ProductService.getBySlug(
		params?.slug as string
	)

	console.log(product)

	return {
		props: {
			product
		}
	}
}

export default ProductPage
