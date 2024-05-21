'use client'
import React, { useState, useEffect } from 'react'


interface GradesProps {
	notas: Grades
}

const WeightTable = ({ notas }: GradesProps) => {
	return (
		<div>
			<table className='border-separate text-left' aria-label="Tabela de Pesos">
				<thead>
					<tr className='font-semibold text-zinc-500'>
						<th className='font-bold text-xl text-left text-black dark:text-white' aria-label="Cabeçalho de Pesos">Pesos</th>
						<th className='pr-4' aria-label="Cabeçalho de Peso">Peso</th>
						<th className='pr-4' aria-label="Cabeçalho de Mínimo">Mínimo</th>
						<th className='text-nowrap hidden sm:table-cell' aria-label="Cabeçalho de Suas Notas">Suas Notas</th>
					</tr>
				</thead>
				<tbody className='font-semibold text-emerald-500'>
					<tr>
						<td className='text-zinc-500 pr-5' aria-label="Linguagens">Linguagens</td>
						<td>{notas.areas.linguagens.toFixed(1)}</td>
						<td>{notas.minimos.linguagens.toFixed(1)}</td>
						<td className='hidden sm:table-cell' aria-label="Nota de Linguagens">480.0</td>
					</tr>
					<tr>
						<td className='text-zinc-500' aria-label="Humanas">Humanas</td>
						<td>{notas.areas.humanas.toFixed(1)}</td>
						<td>{notas.minimos.humanas.toFixed(1)}</td>
						<td className='hidden sm:table-cell' aria-label="Nota de Humanas">480.0</td>
					</tr>
					<tr>
						<td className='text-zinc-500' aria-label="Natureza">Natureza</td>
						<td>{notas.areas.naturezas.toFixed(1)}</td>
						<td>{notas.minimos.naturezas.toFixed(1)}</td>
						<td className='hidden sm:table-cell' aria-label="Nota de Natureza">480.0</td>
					</tr>
					<tr>
						<td className='text-zinc-500' aria-label="Matemática">Matemática</td>
						<td>{notas.areas.matematica.toFixed(1)}</td>
						<td>{notas.minimos.matematica.toFixed(1)}</td>
						<td className='hidden sm:table-cell' aria-label="Nota de Matemática">480.0</td>
					</tr>
					<tr>
						<td className='text-zinc-500' aria-label="Redação">Redação</td>
						<td>{notas.areas.redacao.toFixed(1)}</td>
						<td>{notas.minimos.redacao.toFixed(1)}</td>
						<td className='hidden sm:table-cell' aria-label="Nota de Redação">480.0</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

const GradeTable = ({ notas }: GradesProps) => {
	return (
		<div>
			<table className='h-fit border-separate w-fit' aria-label="Tabela de Notas">
				<thead>
					<tr className='font-bold text-xl text-left'>
						<th>Notas</th>
					</tr>
				</thead>
				<tbody className='font-semibold text-emerald-500'>
					<tr>
						<td className='text-zinc-500' aria-label="Corte SISU">Corte SISU:</td>
						<td>{notas.sisu}</td>
					</tr>
					<tr>
						<td className='text-zinc-500 pr-2' aria-label="Nota máxima">Nota máxima:</td>
						<td>{notas.maxima}</td>
					</tr>
					<tr>
						<td className='text-zinc-500' aria-label="Nota mínima">Nota mínima:</td>
						<td>{notas.minima}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

interface Course {
	notas: { [year: number]: Grades }
}

interface AllTableProps {
	curso: Course,
	selectedYear: string;
}

const AllTables = ({ curso, selectedYear }: AllTableProps) => {
	const [notas, setNotas] = useState<Grades | null>(curso.notas[Number(selectedYear)] || null);

	useEffect(() => {
		setNotas(curso.notas[Number(selectedYear)] || null);
	}, [selectedYear, curso.notas]);

	if (!notas) {
		return <div>Loading...</div>;
	}

	return (
		<div className='flex flex-col sm:flex-row gap-8'>
			<GradeTable notas={notas} />
			<WeightTable notas={notas} />
		</div>
	);
}

export default AllTables;
