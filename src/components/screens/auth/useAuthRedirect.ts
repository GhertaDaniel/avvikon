import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'
import react from 'react'

export const useAuthRedirect = () => {
	const { user } = useAuth()

	const { replace } = useRouter()
	react.useEffect(() => {
		if (user) {
			replace('/')
		}
	}, [user])
}
