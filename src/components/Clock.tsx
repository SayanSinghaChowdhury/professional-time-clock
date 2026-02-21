import { SlidingNumber } from "./shadcnui/sliding-number";

const Clock = () => {
  return (
    <div>
      {" "}
      <div className="space-y-4">
        <div className="flex items-center gap-1 font-mono text-9xl">
          <SlidingNumber
            value={10}
            padStart={true}
          />
          <span className="animate-pulse">:</span>

          <SlidingNumber
            value={10}
            padStart={true}
          />
          <span className="animate-pulse">:</span>

          <SlidingNumber
            value={10}
            padStart={true}
          />

          <span className="ms-2">{"Am"}</span>
        </div>

        <div className="text-center text-6xl">{" Saturday 21 feb, 2026"}</div>
      </div>
    </div>
  );
};

export default Clock;
