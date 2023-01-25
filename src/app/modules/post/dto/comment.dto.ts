import { CommentResponse } from 'src/app/service/post/models/comment.response'

export interface CommentDto {
  email: string
  body: string
}

export const CommentDtoMapper = (comment: CommentResponse): CommentDto => ({
  body: comment.body,
  email: comment.email ?? ''
})