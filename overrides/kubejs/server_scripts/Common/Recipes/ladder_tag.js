ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:ladder', 3),
    [
      'P P',
      'PPP',
      'P P'
    ],
    {
      P: 'minecraft:stick'
    }
  )
})
