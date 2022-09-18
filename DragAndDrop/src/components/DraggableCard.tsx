import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";
const Card = styled.div`
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  background-color: ${(props) => props.theme.cardBgColor};
`;
interface IDraggableCardProps {
  toDo: string;
  index: number;
}
function DraggableCard({ toDo, index }: IDraggableCardProps) {
  console.log(toDo, "has been rendered");
  return (
    <Draggable draggableId={toDo} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}
export default React.memo(DraggableCard);
