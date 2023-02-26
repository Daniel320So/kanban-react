import './App.css';
import Column from "./components/Column";
import { ColumnType } from './utils/enum';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kanban Board</h1>
      </header>
      <body>
        <div className="Kanban-Container">
          <Column column={ColumnType.BACKLOG}></Column>
          <Column column={ColumnType.TO_DO}></Column>
          <Column column={ColumnType.DOING}></Column>
          <Column column={ColumnType.DONE}></Column>
        </div>
      </body>
    </div>
  );
}

export default App;
