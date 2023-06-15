import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'
import SquareButton from '@/ui/button/SquareButton'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'

import Button from '@/ui/button/Button'
import { convertPrice } from '@/utils/convertPrice'
import cn from 'clsx'
import CartItem from './cart-item/CartItem'

const Cart: FC = () => {
	const { isShow, ref, setIsShow } = useOutside(false)

	const { items, total } = useCart()

	const { push } = useRouter()

	return (
		<div className='relative' ref={ref}>
			<SquareButton
				Icon={RiShoppingCartLine}
				onClick={() => setIsShow(!isShow)}
				number={items.length}
			/>

			<div
				className={cn(
					'absolute top-[5.2rem] w-80 -left-[15.5rem] bg-secondary rounded-xl px-5 py-3 text-sm menu text-white',
					isShow ? 'open-menu z-20' : 'close-menu -z-10'
				)}
			>
				<div className='font-normal text-lg mb-5'>My cart</div>

				<div className='flex flex-col gap-6 mb-10'>
					{items.length ? (
						items.map(item => <CartItem item={item} key={item.id} />)
					) : (
						<div className='font-light'>Cart is empty!</div>
					)}
				</div>

				<div>
					<div>Total:</div>
					<div className='font-semibold'>{convertPrice(total)}</div>
				</div>
				<div className='text-center'>
					<Button variant='white' size='sm' className='btn-link mt-5 mb-2'>
						Place order
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Cart
