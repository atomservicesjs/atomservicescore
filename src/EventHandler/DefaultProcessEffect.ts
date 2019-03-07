import { EventProcessEffect } from "./EventProcessEffect";

export const DefaultProcessEffect: EventProcessEffect =
  async ({ event, state }, resulting) => resulting(event, state);
