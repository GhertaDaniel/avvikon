import { FC } from 'react'

const Loader: FC = () => {
	return (
		<>
			<svg
				id='triangle'
				className='origin-[50%_50%] '
				width='100px'
				height='100px'
				viewBox='-3 -4 39 39'
			>
				<polygon
					className='animate-dash'
					strokeDasharray={17}
					fill='#fff'
					stroke='#333333'
					strokeWidth='1'
					points='16,0 32,32 0,32'
				></polygon>
			</svg>
		</>
	)
}

export default Loader
