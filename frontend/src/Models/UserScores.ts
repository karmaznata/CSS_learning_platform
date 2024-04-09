/**
 * Interface for a user
 */
export interface UserScore {

    /** what topic the question relates to */
    user_id: string,

    /**question topic: multiple choice or with value entry*/
    /**question*/
    quiz_theme: string,

    points_scored: number,

    // score_type: string
}