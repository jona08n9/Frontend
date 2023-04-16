// We made one ListItem component, we'll copy with each object from the useState.
import ListItem from "./ListItem";

// We'll .map through the objects in the useState (by writing the {...task} to get everything inside the object) and make a list item for each task that includes the completeTask function ("props.completeTask" since it came form App.jsx)
export default function List(props) {
  return (
    <article className="ListContainer">
      <h2>Current To Du List</h2>
      <ul>
        {props.tasks.map((task) => (
          <ListItem completeTask={props.completeTask} {...task} />
        ))}
      </ul>
    </article>
  );
}
