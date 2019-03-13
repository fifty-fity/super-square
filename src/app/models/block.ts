enum BlockType {
  coin = 1,
  bomb = 2,
  wall = 3,
  goal = 4,
  random = 5
}

export class Block {
  reaction(blockType: BlockType) {
    // Various reactions depending on the block type.
  }
}
