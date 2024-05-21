import CardWrapper from "@/components/layout/CardWrapper";
import Grades from "@/components/pages/curso/Grades";
import Results from "@/components/pages/curso/Results";
import { AboutSection } from "@/components/templates/AboutSection";
import { Clock, GraduationCap, MapPin, Users } from "lucide-react";


export default function Curso({ params }: { params: { cursoId: string } }) {

	const gastronomia = {
		id: 1,
		nome: "Gastronomia",
		modelo: "Licenciatura",
		campus: "Sorocaba",
		periodo: "Noturno",
		vagas: 60,
		notas: {
			2021: {
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
			},
			2022: {
				sisu: 821.65,
				maxima: 821.21,
				minima: 524.65,
				areas: {
					linguagens: 7,
					humanas: 7,
					naturezas: 7,
					matematica: 7,
					redacao: 7
				},
				minimos: {
					linguagens: 1,
					humanas: 1,
					naturezas: 1,
					matematica: 1,
					redacao: 200
				}
			},
			2023: {
				sisu: 921.65,
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
	
	return (
		<main className="flex flex-col gap-8">
			<AboutSection.Wrapper>
				<div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8">
					<div>
						<AboutSection.GoBack />
						<div>
							<AboutSection.Title text={`Curso ${params.cursoId} - ${"Licenciatura"}`} />
							<AboutSection.Description text={`Descrição da Matéria`} />
							<AboutSection.Description text={`...`} />
							<AboutSection.Description text={`...`} />
						</div>
					</div>
					<AboutSection.IconArea>
						<AboutSection.IconText icon={MapPin} text={`Campus ${"Sorobaba"}`} />
						<AboutSection.IconText icon={Clock} text="Noturno" />
						<AboutSection.IconText icon={Users} text="2897 vagas" />
					</AboutSection.IconArea>
				</div>
			</AboutSection.Wrapper>
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
				<div className="col-span-1">
					<Results />
				</div>
				<div className="col-span-1 sm:col-span-2">
					<Grades curso={gastronomia}/>
				</div>
			</div>
		</main>
	);
}
