export default function ListItem({ todo }) {
  return (
    <li className="list_element">
      <input type="checkbox" id={todo.id} className="checkbox" />
      <label htmlFor={todo.id}>
        <strong className="todo_title">{todo.title}</strong>
        <br />
        <i>{new Date(todo.createdAt).toLocaleDateString()}</i>
      </label>
    </li>
  )
}
