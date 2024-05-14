'use client'
import { Weight } from 'lucide-react'
import React from 'react'
import { useState, useEffect } from 'react'

interface GradesProps {
	notas: Grades
}

const WeightTable = ({ notas }: GradesProps) => {
	return (
		<div>
			<table className='border-separate border-spacing-x-10'>
				<thead>
					<tr className='font-semibold text-zinc-500'>
						<th className='font-bold text-xl text-left text-black dark:text-white'>Pesos</th>
						<th>Peso</th>
						<th>Mínimo</th>
						<th>Suas Notas</th>
					</tr>
				</thead>
				<tbody className='font-semibold text-emerald-500'>
					<tr >
						<td className='text-zinc-500'>Linguagens, Códigos e Suas Tecnologias</td>
						<td>{notas.areas.linguagens.toFixed(1)}</td>
						<td>{notas.minimos.linguagens.toFixed(1)}</td>
						<td>480.0</td>
					</tr>
					<tr >
						<td className='text-zinc-500'>Ciências Humanas e Suas tecnologias</td>
						<td>{notas.areas.humanas.toFixed(1)}</td>
						<td>{notas.minimos.humanas.toFixed(1)}</td>
						<td>480.0</td>
					</tr>

					<tr >
						<td className='text-zinc-500'>Ciências da Natureza e Suas Tecnologias</td>
						<td>{notas.areas.naturezas.toFixed(1)}</td>
						<td>{notas.minimos.naturezas.toFixed(1)}</td>
						<td>480.0</td>
					</tr>
					<tr >
						<td className='text-zinc-500'>Matemática e Suas Tecnologias</td>
						<td>{notas.areas.matematica.toFixed(1)}</td>
						<td>{notas.minimos.matematica.toFixed(1)}</td>
						<td>480.0</td>
					</tr>
					<tr >
						<td className='text-zinc-500'>Redação</td>
						<td>{notas.areas.redacao.toFixed(1)}</td>
						<td>{notas.minimos.redacao.toFixed(1)}</td>
						<td>480.0</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}


const GradeTable = ({ notas }: GradesProps) => {
	return (
		<table className='h-fit border-separate'>
			<thead>
				<tr className='font-bold text-xl'>Notas</tr>
			</thead>
			<tbody className='font-semibold text-emerald-500'>
				<tr >
					<td className='text-zinc-500'>Corte SISU:</td>
					<td>{notas.sisu}</td>
				</tr>
				<tr>
					<td className='text-zinc-500 mr-2'>Nota máxima:</td>
					<td>{notas.maxima}</td>
				</tr>
				<tr>
					<td className='text-zinc-500'>Nota mínima:</td>
					<td>{notas.minima}</td>
				</tr>
			</tbody>
		</table>
	)
}


interface AllTableProps {
	curso: Course,
	selectedYear: string;
}

const AllTables = ({ curso, selectedYear }: AllTableProps) => {
	const [notas, setNotas] = useState(curso.notas[Number(selectedYear)]);

	useEffect(() => {
		setNotas(curso.notas[Number(selectedYear)]);
	}, [selectedYear, curso.notas]);


	return (
		<div className='flex gap-4'>
			<GradeTable notas={notas} />
			<WeightTable notas={notas} />
		</div>
	);
}

export default AllTables