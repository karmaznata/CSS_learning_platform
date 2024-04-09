/**
 * Interface for a user's answers
 */
export interface UserAnswers {

    /** id of the users answers */
    _id?: number,

    /** id of the task to which the answer is given */
    task_id: number,

    /**id of the user to which the answer is given*/
    user_id?: string,

    user_answers: any[]
    quiz_theme: string
}