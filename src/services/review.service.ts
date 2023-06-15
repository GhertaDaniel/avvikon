import { AxiosUrl, HttpMethod } from '@/api/api.config'
import { axiosClassic, instance } from '@/api/api.interceptor'
import { IReview } from '@/types/review.interface'
import { ReviewData } from './types/review.type'

export const ReviewService = {
	async getAll() {
		return axiosClassic<IReview[]>({
			url: AxiosUrl.REVIEWS,
			method: HttpMethod.GET
		})
	},

	async getAverageByProduct(productId: string | number) {
		return axiosClassic<number>({
			url: `${AxiosUrl.REVIEWS}/average-by-product/${productId}`,
			method: HttpMethod.GET
		})
	},

	async leave(productId: string | number, data: ReviewData) {
		return instance<IReview>({
			url: `${AxiosUrl.REVIEWS}/leave/${productId}`,
			method: HttpMethod.POST,
			data
		})
	}
}
