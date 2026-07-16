export interface FormControlConfig {
    label: string;
    options?: any;
    placeholder?: string;
    defaultOptionLabel?: string;
}

export interface FilterConfig{
    leader: Record<string,string>;
    teamLeader: Record<string,string>;
    queueTpye: Record<string,string>;
    feedback: Record<string,string>;
    searchResult: Record<string,string>;
    searchType: Record<string,string>;
    status: Record<string,string>;
}

export interface InformedFilterConfig{
    leader: Record<string,string>;
    feedback: Record<string,string>;
    status: Record<string,string>;
    priority: Record<string,string>;
}