export interface TodayTasksDetails {
    scoring: string,
    training: Training,
    calibration: string,
    certification: string,
    monitoring: string;
}

export interface Training {
		LMS: string,
		training_set: string,
		benchmark: string;
}
