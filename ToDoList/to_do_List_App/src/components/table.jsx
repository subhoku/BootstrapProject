const Table = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Task 1</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Task 2</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>Task 3</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Task 4</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table>
    );
  };
  
  export default Table;