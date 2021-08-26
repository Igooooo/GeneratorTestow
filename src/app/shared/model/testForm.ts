import { questionType } from "./questionType";

export interface testForm{
    subject: string;
    question: questionType;
    volume: number;
    time: number;
}