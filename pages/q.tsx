import { ProductService } from '@/services/product/product.service'
import Meta from '@/ui/Meta'
import Catalog from '@/ui/catalog/Catalog'
import Layout from '@/ui/layout/Layout'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const SearchPage: NextPage = () => {
	const { query } = useRouter()

	const { data } = useQuery(['search products', query.term], () => {
		return ProductService.getAll({
			searchTerm: query.term as string
		})
	})

	return (
		<Meta title='Search'>
			<Layout>
				<Catalog
					products={data?.products || []}
					title={`Search by request "${query.term || ''}"`}
				/>
			</Layout>
		</Meta>
	)
}

export default SearchPage
