/**
 * Interface for a user's answers
 */
export interface UserAnswers {

    /** The ID of the user's answers. */
    _id?: number;

    /** The ID of the task to which the answer is given. */
    task_id: number;

    /** The ID of the user to which the answer is given. */
    user_id?: string;

    /** An array containing the user's answers. */
    user_answers: any[];

    /** The theme of the quiz for which the answers are given. */
    quiz_theme: string;
}
