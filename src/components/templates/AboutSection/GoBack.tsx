import React from 'react'
import { FaChevronLeft } from 'react-icons/fa6'

const GoBack = () => {
	return (
		<a href='/' className='flex gap-1 items-center text-sm hover:underline'>
			<FaChevronLeft className='text-[8px]'/>
			<p>Voltar para página principal</p>
		</a>
	)
}

export default GoBack