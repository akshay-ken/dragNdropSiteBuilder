import { useDroppable } from "@dnd-kit/react";
export function DragArea({ id, children }) {
  const { dropRef } = useDroppable({
    id,
  });
  return (
    <section ref={dropRef} className="w-full h-full">
      <div>{children}</div>
    </section>
  );
}
