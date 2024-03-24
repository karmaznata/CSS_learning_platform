/**
 * Interface for a quiz task
 */
export interface QuizTask {
    /** id nuber for quiz task */
    task_id: number,

    /** what topic the question relates to */
    quiz_theme: string,

    /**question topic: multiple choice or with value entry*/
    task_type: string,

    /**question*/
    question: string,
    
    /**The correct answer/s to the question*/
    right_answer: any,

    /**answer options optional in cases, where the answers will be entered by user*/
    answer_options?: string[],

    /**html code as a part of the task where the answers will be entered by user*/
    htmlCode?: string,

    /**css code as a part of the task where the answers will be entered by user*/
    cssCode?: string
}