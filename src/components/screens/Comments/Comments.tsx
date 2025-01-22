import { FC, useEffect, useState } from 'react'

import { asyncWrapper } from '../../../helpers/async-wrapper.helper'
import { CommentService } from '../../../services/comment/comment.service'
import { IComment } from '../../../interfaces/comment.interface'
import { Comment } from './Comment/Comment'

export const Comments: FC = () => {
  const [comments, setComments] = useState<IComment[]>([] as IComment[])

  useEffect(() => {
    asyncWrapper(async () => {
      const comments = await CommentService.getAll()
      setComments(comments)
    })
  }, [])

  return (
    <div>
      {comments.map(({ id, ...comment }) => (
        <Comment key={id} {...comment} />
      ))}
    </div>
  )
}
