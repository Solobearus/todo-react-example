import { css } from 'glamor'

export const wrapper = css({
  width: '400px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
})

export const wrapperItem = css({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '40px',
  border: '1px black solid',
  padding: '0 20px',
})

export const wrapperItemTodoList = css({
  height: '100%',
})

export const todoList = css({
  width: '100%',
})

export const input = css({
  width: 'calc(100% - 40px)',
  height: '100%',
  padding: 0,
  margin: 0,
  border: 0,
})

export const listItem = css({

  display: 'flex',
  padding: '10px 0',
  justifyContent: 'space-between',
})

export const done = css({
  textDecoration: 'line-through',
})
