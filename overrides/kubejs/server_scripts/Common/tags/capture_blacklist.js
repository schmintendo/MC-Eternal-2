


ServerEvents.tags("entity_type", event => {

    let cNoCapture = "c:capturing_not_supported"

    let cNoFarming = "c:spawning_not_supported"

    
    //No Capture
    event.add(cNoCapture, [
        "#forge:bosses",
        "minecraft:wither",
        "minecraft:warden",
        "irons_spellbooks:citadel_keeper",
        "irons_spellbooks:pyromancer",
        "irons_spellbooks:archevoker",
        "irons_spellbooks:apothecarist",
        "irons_spellbooks:cryomancer",
        "alexscaves:hullbreaker",
        "alexscaves:tremorzilla",
        "artifacts:mimic",
        "irons_spellbooks:priest",
        "irons_spellbooks:cultist",
        "goblintraders:goblin_trader",
        "cataclysm:ignis",
        "cataclysm:the_harbinger",
        "cataclysm:the_leviathan",
        "cataclysm:netherite_monstrosity",
        "cataclysm:ancient_remnant",
        "cataclysm:maledictus",
        "bosses_of_mass_destruction:lich",
        "bosses_of_mass_destruction:gauntlet",
        "bosses_of_mass_destruction:void_blossom",
        "mowziesmobs:ferrous_wroughtnaut",
        "mowziesmobs:frostmaw",
        "mowziesmobs:umvuthi",
        "mowziesmobs:sculptor",
        "iceandfire:lightning_dragon",
        "iceandfire:fire_dragon",
        "iceandfire:ice_dragon",
        "masquerader_mod:masquerader"
    ])


    event.add("ars_nouveau:jar_blacklist", [
        cNoCapture
    ])

    event.add("enderio:soul_vial_blacklist", [
        cNoCapture
    ])

    event.add("occultism:soul_gem_deny_list", [
        cNoCapture
    ])


    //No Spawning
    // inherits from No Capture, because if we don't want something caught, we probably do not want it farmed either.
    event.add(cNoFarming, [
        cNoCapture
    ])

    event.add("enderio:spawner_blacklist", [
        cNoFarming
    ])
})