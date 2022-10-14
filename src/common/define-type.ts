export interface RouterItem {
    path: string;
    component: React.ComponentClass | React.FunctionComponent;
    noExact?: boolean;
    isPrivate?: boolean;
}

export interface Question {
    id: string;
    content: string;
    choiceLst: QuestionChoice[];
    pickedChoice: number|null;

}

export interface QuestionChoice {
    content: string;
    score: number
}