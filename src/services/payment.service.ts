import { AxiosUrl } from '@/api/api.config'
import { instance } from '@/api/api.interceptor'
import { IPaymentResponse } from '@/types/payment.interface'

export const PaymentService = {
	async createPayment(amount: number) {
		const { data } = await instance.post<IPaymentResponse>(AxiosUrl.PAYMENT, {
			amount
		})

		return data
	}
}
