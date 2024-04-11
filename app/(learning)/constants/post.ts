export const POST_PATHS = {
  HOME: '/posts',
  NEW: '/posts/new',
  DETAIL: '/posts/:postId',
  EDIT: '/posts/:postId/edit',
}

export const POST_NAV: { title: string; path: string }[] = [
  {
    title: 'Posts',
    path: POST_PATHS.HOME,
  },
  {
    title: 'New Post',
    path: POST_PATHS.NEW,
  },
  {
    title: 'Post detail',
    path: POST_PATHS.DETAIL,
  },
  {
    title: 'Edit post',
    path: POST_PATHS.EDIT,
  },
]
