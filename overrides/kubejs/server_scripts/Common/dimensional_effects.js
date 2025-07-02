
const $MobEffectInstance = Java.loadClass("net.minecraft.world.effect.MobEffectInstance")
const $HashMap = Java.loadClass("java.util.HashMap")

const dimEffectUpdateDelay = 20;
const dimEffects = new $HashMap()
//const playerDimensionMemory = new $HashMap()

let dimEffectTickCounter = 0;

const addDimensionalEffect = (dim, effect, amp, duration, visible, condition) => {
    let effectObj = {id: effect, amp: amp, duration: duration, visible: visible}

    if(condition)
        effectObj.condition = condition;
    else effectObj.condition = () => true;

    dimEffects[dim] 
        ? dimEffects.get(dim).push(effectObj)
        : dimEffects.put(dim, [effectObj]);
}

//addDimensionalEffect("minecraft:overworld", "minecraft:strength", 2, 600, false)


ServerEvents.tick(event => {
    //console.log(dimEffectTickCounter, dimEffectUpdateDelay)
    dimEffectTickCounter++
    if(dimEffectTickCounter < dimEffectUpdateDelay)
        return;
    dimEffectTickCounter = 0;

    dimEffects.forEach((dimId, effects) => {
        let level = event.server.getLevel(dimId)
        level.getPlayers(() => true).forEach(player => {
            let playerEffects = player.getActiveEffectsMap();

            effects.forEach(effect => {
                if(!effect.condition(player)
                    || (playerEffects.containsKey(effect.id) && playerEffects.get(effect.id).getAmplifier() < effect.level))
                    return;
                    
                player.addEffect(new $MobEffectInstance(effect.id, effect.duration, effect.amp, false, effect.visible))
            })
        })
    });
})