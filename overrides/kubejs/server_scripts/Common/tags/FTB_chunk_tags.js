ServerEvents.tags("entity_type", event => {
    event.add('ftbchunks:entity_mob_griefing_blacklist', [
        'specialmobs:spitfireskeleton',
        /iceandfire:.*_dragon/,
        'rats:rat'
     ]);
    event.add('ftbchunks:entity_mob_griefing_blacklist', 'iceandfire:fire_dragon');
    event.add('ftbchunks:entity_mob_griefing_blacklist', 'iceandfire:ice_dragon');
    event.add('ftbchunks:entity_mob_griefing_blacklist', 'iceandfire:lightning_dragon');
    event.add('ftbchunks:entity_mob_griefing_blacklist', 'rats:rat');
})