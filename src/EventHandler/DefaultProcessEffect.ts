import { EventProcessEffect } from "./EventProcessEffect";

export const DefaultProcessEffect: EventProcessEffect =
  async ({ event, result }, resulting) => resulting(event, result);
