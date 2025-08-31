import { DragDropProvider } from "@dnd-kit/react";
import { DragArea } from "./DragArea";
import { DraggableItem } from "./DraggableItem";
import { useState } from "react";

export function MainPage() {
  const [isDropped, setIsDropped] = useState(false);
  return (
    <main className="h-screen w-full bg-slate-600 relative">
      <DragDropProvider
        onDragEnd={(e) => {
          if (e.canceled) return;
          const { target } = e.operation;
          setIsDropped(target?.id === "droppable");
        }}
      >
        {!isDropped && <DraggableItem />}
        <DraggableItem />
        <DragArea id="droppable">{isDropped && <DraggableItem />}</DragArea>
      </DragDropProvider>
    </main>
  );
}
