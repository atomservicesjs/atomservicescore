import { EventProcessEffect } from "./EventProcessEffect";

export const DefaultEventProcessEffect: EventProcessEffect =
  async ({ event, state }, resulting) => resulting(event, state);
