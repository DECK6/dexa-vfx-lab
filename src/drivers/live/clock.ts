type ClockListener = (elapsedMs: number) => void;

class SharedAnimationClock {
  private listeners = new Set<ClockListener>();
  private requestId: number | null = null;
  private elapsedMs = 0;
  private previousTime: number | null = null;

  constructor() {
    document.addEventListener('visibilitychange', this.handleVisibility);
  }

  subscribe(listener: ClockListener): () => void {
    this.listeners.add(listener);
    this.start();
    return () => {
      this.listeners.delete(listener);
      if (this.listeners.size === 0) this.stop();
    };
  }

  private readonly handleVisibility = () => {
    this.previousTime = null;
    if (document.hidden) this.stop();
    else this.start();
  };

  private start() {
    if (document.hidden || this.requestId !== null || this.listeners.size === 0) return;
    this.requestId = requestAnimationFrame(this.tick);
  }

  private stop() {
    if (this.requestId !== null) cancelAnimationFrame(this.requestId);
    this.requestId = null;
    this.previousTime = null;
  }

  private readonly tick = (now: number) => {
    this.requestId = null;
    if (this.previousTime !== null) this.elapsedMs += Math.min(100, now - this.previousTime);
    this.previousTime = now;
    for (const listener of this.listeners) listener(this.elapsedMs);
    this.start();
  };
}

export const sharedAnimationClock = new SharedAnimationClock();

