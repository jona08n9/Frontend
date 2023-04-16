// We add the "completeTask" function on the button, and it sendt the id to app, which filter by ID's
export default function ListItem(props) {
  return (
    <li>
      <h3>{props.task}</h3>
      <h6>Task id: #{props.id}</h6>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
    </li>
  );
}
