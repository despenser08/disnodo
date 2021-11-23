/* eslint-disable @typescript-eslint/no-var-requires */
import { Node } from "../structures/Node";
import { Player } from "../structures/Player";
import { Queue } from "../structures/Queue";

export interface Extendable {
  Player: typeof Player;
  Queue: typeof Queue;
  Node: typeof Node;
}
