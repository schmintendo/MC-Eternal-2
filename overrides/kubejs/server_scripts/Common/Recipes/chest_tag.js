ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:chest', 1),
    [
      'AAA',
      'A A',
      'AAA'
    ],
    {
      A: '#minecraft:planks'
    }
  )
})
