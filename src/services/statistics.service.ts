import { AxiosUrl, HttpMethod } from '@/api/api.config'
import { instance } from '@/api/api.interceptor'
import { IReview } from '@/types/review.interface'

export type TypeStatisticsResponse = {
	name: string
	value: number
}[]

export const StatisticsService = {
	async getMain() {
		return instance<IReview[]>({
			url: AxiosUrl.STATISTICS,
			method: HttpMethod.GET
		})
	}
}
