
export class SystemActor extends Actor {
    async applyDamage(damage) {
        // Always take a minimum of 1 damage, and round to the nearest integer.
        damage = Math.round(Math.max(1, damage));

        // Update the health.
        const { value } = this.system.hitpoints;
        await this.update({ "system.hitpoints.value": value - damage });

        // Log a message.
        await ChatMessage.implementation.create({
            content: `${this.name} took ${damage} damage!`
        });
    }

    prepareDerivedData() {
        console.log("in prepareDerivedData")
    }
}