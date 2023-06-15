import { AxiosUrl, HttpMethod } from '@/api/api.config'
import { axiosClassic, instance } from '@/api/api.interceptor'
import { ICategory } from '@/types/category.interface'

export const CategoryService = {
	async getAll() {
		return axiosClassic<ICategory[]>({
			url: AxiosUrl.CATEGORIES,
			method: HttpMethod.GET
		})
	},

	async getById(id: string | number) {
		return instance<ICategory[]>({
			url: `${AxiosUrl.CATEGORIES}/${id}`,
			method: HttpMethod.GET
		})
	},

	async getBySlug(slug: string) {
		return axiosClassic<ICategory[]>({
			url: `${AxiosUrl.CATEGORIES}/by-slug/${slug}`,
			method: HttpMethod.GET
		})
	},

	async create() {
		return instance<ICategory>({
			url: AxiosUrl.CATEGORIES,
			method: HttpMethod.POST
		})
	},
	async update(id: string | number, name: string) {
		return instance<ICategory>({
			url: `${AxiosUrl.CATEGORIES}/${id}`,
			method: HttpMethod.PUT,
			data: { name }
		})
	},

	async delete(id: string | number) {
		return instance<ICategory>({
			url: `${AxiosUrl.CATEGORIES}/${id}`,
			method: HttpMethod.DELETE
		})
	}
}
