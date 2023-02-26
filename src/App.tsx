import './App.css';
import Column from "./components/Column";
import { ColumnType } from './utils/enum';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kanban Board</h1>
      </header>
      <body>
        <DndProvider backend={HTML5Backend}>
          <div className="Kanban-Container">
            <Column column={ColumnType.BACKLOG}></Column>
            <Column column={ColumnType.TO_DO}></Column>
            <Column column={ColumnType.DOING}></Column>
            <Column column={ColumnType.DONE}></Column>
          </div>
        </DndProvider>
      </body>
    </div>
  );
}

export default App;
