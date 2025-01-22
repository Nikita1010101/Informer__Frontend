import { CSSProperties } from 'react'

import { IStage } from '../interfaces/task.interface'

const colors: Record<'red' | 'green' | 'blue', number>[] = [
  { red: 255, green: 0, blue: 0 },
  { red: 255, green: 177.5, blue: 0 },
  { red: 255, green: 255, blue: 0 },
  { red: 0, green: 255, blue: 177.5 },
  { red: 0, green: 255, blue: 0 },
]

export function calculateStagesPercentage(stages: IStage[]) {
  const stagesCount = stages.length,
    completedStagesCount = stages.reduce(
      (acc, stage) =>
        acc + stage.completedSubStagesCount / stage.subStagesCount,
      0
    )

  return (100 / stagesCount) * completedStagesCount
}

export function calculateColorIndex(stages: IStage[]) {
  const stagesPercentage = calculateStagesPercentage(stages),
    colorPercentage = 100 / (colors.length - 1)

  return Math.floor(stagesPercentage / colorPercentage)
}

export function calculateCompletedColor(stages: IStage[]) {
  const colorIndex = calculateColorIndex(stages)

  const { blue, green, red } = colors[colorIndex]

  return {
    '--color': `rgba(${red},${green},${blue})`,
  } as CSSProperties
}
