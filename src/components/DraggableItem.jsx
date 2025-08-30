export function DraggableItem() {
  return (
    <section className="bg-slate-800 h-1/3 absolute inset-x-0 bottom-0 p-4 flex flex-col gap-y-6 items-center">
      {/* draggable item one */}
      <nav className="bg-slate-400 rounded-md w-full">
        <ul className="flex flex-row justify-around md:text-2xl text-xl">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      {/* draggable item two */}
      <button className="bg-slate-400 px-6 w-fit rounded-full text-xl md:text-2xl">
        Button
      </button>
      {/* draggable items three */}
      <section className="w-full bg-slate-400 h-full flex flex-col items-center justify-center text-xl md:text-2xl">
        HERO
      </section>
    </section>
  );
}
