interface Grades {
    sisu: number;
    maxima: number;
    minima: number;
    areas: {
        linguagens: number;
        humanas: number;
        naturezas: number;
        matematica: number;
        redacao: number;
    };
    minimos: {
        linguagens: number;
        humanas: number;
        naturezas: number;
        matematica: number;
        redacao: number;
    };
};

type Course = {
    id: number;
    nome: string;
    modelo: string;
    campus: string;
    periodo: string;
    vagas: number;
    notas: {
        [ano: number]: Grades;
    };
};