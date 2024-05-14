import CardWrapper from "@/components/layout/CardWrapper";
import Grades from "@/components/pages/curso/Grades";
import Results from "@/components/pages/curso/Results";
import { AboutSection } from "@/components/templates/AboutSection";
import { GraduationCap, MapPin, Users } from "lucide-react";


export default function Curso({ params }: { params: { cursoId: string } }) {
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
						<AboutSection.IconText icon={GraduationCap} text="64 cursos" />
						<AboutSection.IconText icon={Users} text="2897 vagas" />
					</AboutSection.IconArea>
				</div>
			</AboutSection.Wrapper>
			<div className="grid grid-cols-3 gap-8">
				<div className="col-span-1">
					<Results />
				</div>
				<div className="col-span-2">
					<Grades />
				</div>
			</div>
		</main>
	);
}
