/**
 * Interface for a tutorial
 */
export interface TutorialModel {
    /** id nuber for quiz task */
    tutorial_id: number,

    /** what topic the question relates to */
    tutorial_theme: string,

    /**question topic: multiple choice or with value entry*/
    path: string,

    /**question*/
    tutorial_banner: any,

    /**The correct answer/s to the question*/
    description: string,

    /**answer options optional in cases, where the answers will be entered by user*/
    method_browser_support: string,
    tutorial_intro_text: string,
    browser_support_link: string,
    usage_goals_heading: string,
    usage_goals: string[]
}