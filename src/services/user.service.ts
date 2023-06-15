import { AxiosUrl, HttpMethod } from '@/api/api.config'
import { instance } from '@/api/api.interceptor'
import { IFullUser, IUser } from '@/types/user.interface'
import { ProfileData } from './types/profile.type'

export const UserService = {
	async getProfile() {
		return instance<IFullUser>({
			url: AxiosUrl.USERS,
			method: HttpMethod.GET
		})
	},

	async updateProfile(data: ProfileData) {
		return instance<IUser>({
			url: AxiosUrl.USERS,
			method: HttpMethod.PUT,
			data
		})
	},

	async toggleFavorite(productId: string | number) {
		return instance<IUser>({
			url: `${AxiosUrl.USERS}/favorites/${productId}`,
			method: HttpMethod.PATCH
		})
	}
}
