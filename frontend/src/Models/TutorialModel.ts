/**
 * Interface for a tutorial
 */
export interface TutorialModel {
    
    /**
     * Unique identifier for the tutorial
     */
    tutorial_id: number,
    /**
     * Theme or topic of the tutorial
     */
    tutorial_theme: string,
    /**
     * Path to the tutorial resource
     */
    path: string,
    /**
     * Banner image or content associated with the tutorial
     */
    tutorial_banner: any,
    /**
     * Description or summary of the tutorial
     */
    description: string,
    /**
     * Methods or techniques covered in the tutorial with browser support details
     */
    method_browser_support: string,
    /**
     * Introduction text providing context for the tutorial
     */
    tutorial_intro_text: string,
    /**
     * Link to browser support information
     */
    browser_support_link: string,
    /**
     * Heading for the section outlining usage goals
     */
    usage_goals_heading: string,
    /**
     * Array of usage goals for the tutorial
     */
    usage_goals: string[]
}
