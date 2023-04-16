//The form gets the props from App.jsx
export default function Form(props) {
  function submit(e) {
    // Always do the e.preventDefault() or you lose the data you want to send.
    e.preventDefault();
    //We do the addTask function ("props.addTask" because it's send down from App.jsx)
    props.addTask(e.target.elements.task.value);
    //We clear the input field, since we removed the deafult functions from the submit, we need to do stuff manually.
    e.target.elements.task.value = "";
  }

  // ALWAYS(!!!) the "onSubmit={submit}" on the form, NOT the button with "onClick={submit}".
  return (
    <form className="form" onSubmit={submit}>
      <label htmlFor="form_task">Create new task</label>
      <input required type="text" name="task" id="task_form" />
      <button>Add to ToDolist</button>
    </form>
  );
}
