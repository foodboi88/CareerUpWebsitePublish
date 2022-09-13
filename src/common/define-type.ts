export interface RouterItem {
    path: string;
    component: React.ComponentClass | React.FunctionComponent;
    noExact?: boolean;
    isPrivate?: boolean;
}

export interface Question {
    content: string;
    choiceLst: QuestionChoice[];
    pickedChoice: QuestionChoice|null;

}

export interface QuestionChoice {
    content: string
}