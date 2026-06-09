import { ProgramDetail } from "../../../model/programDetails"
import { TodayTasksDetails } from "../../../model/today-tasks-model"

export const PROGRAM_MOCK_DATA: ProgramDetail = {
  activity: 'broadcasting',
  role: 'user',
  program: 'INTERN',
  test: 'WORK BASED LEARNING',
  level: 'Medium',
  mentor: 'Vansh',
  date_of_joining: '2024-06-01T12:00:00Z'
}


export const ACTIVITY_WORK_FLOW: TodayTasksDetails = {
  scoring: "INPG",
  training: {
    LMS: 'NS',
    training_set: 'CPD',
    benchmark: 'INPG'
  },
  calibration: 'INPG',
  certification: 'CPD',
  monitoring: 'NS',
}


