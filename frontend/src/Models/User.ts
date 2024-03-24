import { UserScore } from "./UserScores";

/**
 * Interface for a user
 */
export interface User {

    _id: string;
    /** what topic the question relates to */
    username: string,

    /**question topic: multiple choice or with value entry*/
    email: string,

    /**question*/
    password: string,

    scores: UserScore[]

}