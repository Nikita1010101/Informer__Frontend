export interface IStage {
  title: string
  reward: number
  completedSubStagesCount: number
  subStagesCount: number
}

export interface ITask {
  title: string
  condition: string
  stages: IStage[]
}
