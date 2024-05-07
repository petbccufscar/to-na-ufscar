import SearchArea from "@/components/pages/home/SearchArea";
import { AboutSection } from "@/components/templates/AboutSection";
import { GraduationCap, MapPin, Users } from "lucide-react";

export default function Home() {
	return (
		<main>
			<AboutSection.Wrapper>
				<div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8">
					<div>
						<AboutSection.Title text="Simule suas notas e entre para a melhor do Brasil!" />
						<AboutSection.Description text="Simule suas notas para entrar na melhor faculdade do Brasil! São +60 curso e 361 vagas disponíveis!" />
					</div>
					<AboutSection.IconArea>
						<AboutSection.IconText icon={MapPin} text="São Paulo, Brasil" />
						<AboutSection.IconText icon={GraduationCap} text="64 cursos" />
						<AboutSection.IconText icon={Users} text="2897 vagas" />
					</AboutSection.IconArea>
				</div>
			</AboutSection.Wrapper>
			<SearchArea/>
		</main>
	);
}
