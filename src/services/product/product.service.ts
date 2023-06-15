import { AxiosUrl, HttpMethod } from '@/api/api.config'
import { axiosClassic, instance } from '@/api/api.interceptor'
import { IProduct, TypePaginationProducts } from '@/types/product.interface'
import { ProductData, ProductDataFilters } from '../types/product.type'

export const ProductService = {
	async getAll(queryData = {} as ProductDataFilters) {
		const { data } = await axiosClassic<TypePaginationProducts>({
			url: AxiosUrl.PRODUCTS,
			method: HttpMethod.GET,
			params: queryData
		})

		return data
	},

	async getSimilar(id: string | number) {
		return axiosClassic<IProduct[]>({
			url: `${AxiosUrl.PRODUCTS}/similar/${id}`,
			method: HttpMethod.GET
		})
	},

	async getByCategory(categorySlug: string) {
		return axiosClassic<IProduct[]>({
			url: `${AxiosUrl.PRODUCTS}/by-category/${categorySlug}`,
			method: HttpMethod.GET
		})
	},

	async getById(id: string | number) {
		return instance<IProduct>({
			url: `${AxiosUrl.PRODUCTS}/${id}`,
			method: HttpMethod.GET
		})
	},

	async getBySlug(slug: string) {
		return axiosClassic<IProduct>({
			url: `${AxiosUrl.PRODUCTS}/by-slug/${slug}`,
			method: HttpMethod.GET
		})
	},

	async create() {
		return instance<IProduct>({
			url: AxiosUrl.PRODUCTS,
			method: HttpMethod.POST
		})
	},
	async update(id: string | number, data: ProductData) {
		return instance<IProduct>({
			url: `${AxiosUrl.PRODUCTS}/${id}`,
			method: HttpMethod.PUT,
			data
		})
	},

	async delete(id: string | number) {
		return instance<IProduct>({
			url: `${AxiosUrl.PRODUCTS}/${id}`,
			method: HttpMethod.DELETE
		})
	}
}
