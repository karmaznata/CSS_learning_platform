/**
 * Interface for a  user's score
 */

export interface UserScore {

    /** The ID of the user. */
    user_id: string;

    /** The theme of the quiz for which the score is recorded. */
    quiz_theme: string;

    /** The number of points scored by the user in the quiz. */
    points_scored: number;   
}