ServerEvents.recipes(event => {

    event.shaped("integratedterminals:terminal_storage_portable", [
        " T ",
        "CEC",
        "SWS"
    ], {
        T: "integratedterminals:part_terminal_storage",
        C: "integrateddynamics:crystalized_chorus_block",
        W: "waystones:warp_stone",
        E: "mekanism:elite_control_circuit",
        S: "minecraft:echo_shard"
    }).id("integratedterminals:crafting/terminal_storage_portable")


    event.custom({
        "type": "integrateddynamics:crafting_special_shaped_omni_directional",
        "group": "integrateddynamics:part_connector_omni_directional",
        "pattern": [
            "WLW",
            "MCM",
            "WLW"
        ],
        "key": {
            "L": {
            "item": "integrateddynamics:logic_director"
            },
            "M": {
            "item": "integrateddynamics:part_connector_mono_directional"
            },
            "C": {
            "item": "integrateddynamics:cable"
            },
            "W": {
                "item": "waystones:warp_dust"
            }
        }
    }).id("integrateddynamics:special/part_connector_omni_directional")

    event.custom({
        "type": "integrateddynamics:crafting_special_shaped_omni_directional_3",
        "group": "integrateddynamics:part_connector_omni_directional",
        "pattern": [
            "WLW",
            "MOM",
            "WLW"
        ],
        "key": {
            "L": {
            "item": "integrateddynamics:logic_director"
            },
            "M": {
            "item": "integrateddynamics:part_connector_mono_directional"
            },
            "O": {
            "item": "integrateddynamics:part_connector_omni_directional"
            },
            "W": {
                "item": "waystones:warp_dust"
            }
        }
    }).id("integrateddynamics:special/part_connector_omni_directional_copy")
})