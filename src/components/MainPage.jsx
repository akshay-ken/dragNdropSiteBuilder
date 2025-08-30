import { DragArea } from "./DragArea";
import { DraggableItem } from "./DraggableItem";

export function MainPage() {
  return (
    <main className="h-screen w-full bg-slate-600 relative">
      <DraggableItem />
      <DragArea />
    </main>
  );
}
