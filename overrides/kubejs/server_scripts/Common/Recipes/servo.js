ServerEvents.recipes(event => {
  event.shaped(
    Item.of('thermal:redstone_servo', 1),
    [
      'ABC',
      ' E ',
      'GHI'
    ],
    {
      A: 'minecraft:redstone_block',
      B: '#forge:ingots/tin',
      C: 'minecraft:redstone_block',
      E: 'create:precision_mechanism',
      G: 'minecraft:redstone_block',
      H: '#forge:ingots/tin',
      I: 'minecraft:redstone_block',
    }
  )
})
