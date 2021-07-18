import { answer } from "./answer";

export interface question{
    id: string, 
    type: string,
    title: string,
    answers: [
        answer
    ] // Trzeba dodac poprawny typ. Jest to tabela z answer
}