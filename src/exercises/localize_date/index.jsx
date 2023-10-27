import ListItem from './components/ListItem'
import LIST_OF_TODOS from './constants/list_of_todos'
import './styles.css'

/**
 * Exercise: Localize Date
 * 
 * Description: If you take a look at the createdAt dates in the UI vs the data source,
 * you will notice that there's a 1 day difference, specifically, one day less than it should be.
 * 
 * Your job is:
 *  1. Understand why this is happening
 *  2. Fix this error, so that it displays the correct date regardless of the user's timezone
 */

export default function LocalizeDate() {
  return (
    <section className="exercise_wrapper">
      <h2>Mis tareas para hoy:</h2>
      <ul>
        {LIST_OF_TODOS.map((todo) => <ListItem key={todo.id} todo={todo} />)}
      </ul>
    </section>
  );
}
