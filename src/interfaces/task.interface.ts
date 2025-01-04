export interface IStage {
  title: string
  reward: number
  isCompleted: boolean
}

export interface ITask {
  title: string
  condition: string
  stages: IStage[]
}
