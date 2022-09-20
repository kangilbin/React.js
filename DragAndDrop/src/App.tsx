import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { toDoState } from "./atoms";
import Board from "./components/Board";
import { BsClipboardPlus, BsTrash } from "react-icons/bs";

const Wrapper = styled.div`
  display: grid;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  grid-template-rows: 20% 80%;
`;
const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;
const Trash = styled.div``;
const Left = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Top = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const addBoard = () => {};
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      // 같은 board에서 이동
      setToDos((allBoard) => {
        const boardCopy = [...allBoard[source.droppableId]];
        const taskObj = boardCopy[source.index]; // Obj찾기

        // 인덱스 값 삭제
        boardCopy.splice(source.index, 1);
        // 특정 위치에 추가
        boardCopy.splice(destination?.index, 0, taskObj);
        return {
          ...allBoard,
          [source.droppableId]: boardCopy,
        };
      });
    } else if (destination?.droppableId === "trash") {
      // 휴지통 삭제
      setToDos((allBoard) => {
        const boardCopy = [...allBoard[source.droppableId]];
        boardCopy.splice(source.index, 1);
        return {
          ...allBoard,
          [source.droppableId]: boardCopy,
        };
      });
    } else {
      // 다른 board로 이동
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const destinationBoard = [...allBoards[destination.droppableId]];
        const taskObj = sourceBoard[source.index];

        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, taskObj);

        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Top>
          <input type="text" />
          <Left onClick={addBoard}>
            <BsClipboardPlus size="50" />
          </Left>
          <Right>
            <Droppable droppableId="trash">
              {(provided) => (
                <Trash ref={provided.innerRef} {...provided.droppableProps}>
                  <BsTrash size="50" />
                </Trash>
              )}
            </Droppable>
          </Right>
        </Top>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
