import Cookies from 'js-cookie'

import { IAuthResponse, ITokens } from '@/store/user/user.interface'
import { ETokens } from '@/types/token.enum'

export const getAccessToken = () => {
	const accessToken = Cookies.get(ETokens.ACCESS_TOKEN)
	return accessToken || null
}

export const getRefreshToken = () => {
	const refreshToken = Cookies.get(ETokens.REFRESH_TOKEN)
	return refreshToken || null
}

export const getUserFromStorage = () => {
	return JSON.parse(localStorage.getItem('user') || '{}')
}

export const saveTokensStorage = (data: ITokens) => {
	Cookies.set(ETokens.ACCESS_TOKEN, data.accessToken)
	Cookies.set(ETokens.REFRESH_TOKEN, data.refreshToken)
}

export const removeFromStorage = () => {
	Cookies.remove(ETokens.ACCESS_TOKEN)
	Cookies.remove(ETokens.REFRESH_TOKEN)
	localStorage.removeItem('user')
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}
