/**
 * Interace for a user
 */

export interface User {
    
    /** The unique identifier for the user. */
    _id: string;

    /** Contains the username of the user. */
    username: string;

    /** Contains the email address of the user. */
    email: string;

    /** Contains the password of the user. */
    password: string;
}