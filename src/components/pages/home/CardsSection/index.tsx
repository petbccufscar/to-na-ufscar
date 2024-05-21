import React from 'react'
import Card from './Card'

const gastronomia = {
    id: 1,
    nome: "Gastronomia",
    modelo: "Licenciatura",
    campus: "Sorocaba",
    periodo: "Noturno",
    vagas: 60,
    notas: {
        2024: {
            sisu: 721.65,
            maxima: 821.21,
            minima: 524.65,
            areas: {
                linguagens: 2,
                humanas: 1,
                naturezas: 3,
                matematica: 1,
                redacao: 3
            },
            minimos: {
                linguagens: 1,
                humanas: 1,
                naturezas: 1,
                matematica: 1,
                redacao: 200
            }
        }
    }
}


const CardsSection = () => {
    return (
        <div className='flex flex-wrap gap-4'>
            <Card curso={gastronomia} />
            <Card curso={gastronomia} />
            <Card curso={gastronomia} />
            <Card curso={gastronomia} />
            <Card curso={gastronomia} />
            <Card curso={gastronomia} />
        </div>
    )
}

export default CardsSection