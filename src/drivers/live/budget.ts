import type { FxCost } from '../../fx/types';

const COST_WEIGHT: Record<FxCost, number> = { 1: 1, 2: 3, 3: 8 };
const MAX_BUDGET = 40;
const HYSTERESIS_MS = 500;

interface BudgetCard {
  element: HTMLElement;
  cost: FxCost;
  visible: boolean;
  centerDistance: number;
  active: boolean;
  desired: boolean;
  desiredSince: number;
  notify: (active: boolean) => void;
}

class LiveBudgetManager {
  private cards = new Map<string, BudgetCard>();
  private timer: number | null = null;
  private scrollTimer: number | null = null;
  private observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver(this.handleIntersection, {
      root: null,
      rootMargin: '160px 0px',
      threshold: [0, 0.01, 0.25, 0.75],
    });
    window.addEventListener('scroll', this.handleViewportChange, true);
    window.addEventListener('resize', this.handleViewportChange);
  }

  register(
    id: string,
    element: HTMLElement,
    cost: FxCost,
    notify: (active: boolean) => void,
  ): () => void {
    this.unregister(id);
    this.cards.set(id, {
      element,
      cost,
      visible: false,
      centerDistance: Number.POSITIVE_INFINITY,
      active: false,
      desired: false,
      desiredSince: performance.now(),
      notify,
    });
    element.dataset.liveBudgetId = id;
    this.observer.observe(element);
    return () => this.unregister(id);
  }

  private unregister(id: string) {
    const card = this.cards.get(id);
    if (!card) return;
    this.observer.unobserve(card.element);
    this.cards.delete(id);
    this.schedule();
  }

  private readonly handleIntersection: IntersectionObserverCallback = (entries) => {
    const viewportCenter = window.innerHeight / 2;
    for (const entry of entries) {
      const id = (entry.target as HTMLElement).dataset.liveBudgetId;
      if (!id) continue;
      const card = this.cards.get(id);
      if (!card) continue;
      card.visible = entry.isIntersecting;
      card.centerDistance = Math.abs(entry.boundingClientRect.top + entry.boundingClientRect.height / 2 - viewportCenter);
    }
    this.reconcile();
  };

  private reconcile() {
    const now = performance.now();
    const viewportCenter = window.innerHeight / 2;
    for (const card of this.cards.values()) {
      if (!card.visible) continue;
      const bounds = card.element.getBoundingClientRect();
      card.centerDistance = Math.abs(bounds.top + bounds.height / 2 - viewportCenter);
    }
    const wanted = new Set<string>();
    let budget = 0;
    const candidates = [...this.cards.entries()]
      .filter(([, card]) => card.visible)
      .sort((a, b) => a[1].centerDistance - b[1].centerDistance);

    for (const [id, card] of candidates) {
      const weight = COST_WEIGHT[card.cost];
      if (budget + weight > MAX_BUDGET) continue;
      budget += weight;
      wanted.add(id);
    }

    let needsTimer = false;
    for (const [id, card] of this.cards) {
      const desired = wanted.has(id);
      if (desired !== card.desired) {
        card.desired = desired;
        card.desiredSince = now;
      }
      if (desired === card.active) {
        continue;
      }
      if (now - card.desiredSince >= HYSTERESIS_MS) {
        card.active = desired;
        card.desiredSince = now;
        card.notify(desired);
      } else {
        needsTimer = true;
      }
    }

    if (needsTimer) this.schedule();
  }

  private schedule() {
    if (this.timer !== null) window.clearTimeout(this.timer);
    this.timer = window.setTimeout(() => {
      this.timer = null;
      this.reconcile();
    }, HYSTERESIS_MS);
  }

  private readonly handleViewportChange = () => {
    if (this.scrollTimer !== null) return;
    this.scrollTimer = window.setTimeout(() => {
      this.scrollTimer = null;
      this.reconcile();
    }, 50);
  };
}

export const liveBudgetManager = new LiveBudgetManager();
