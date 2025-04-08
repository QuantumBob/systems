import SimpleBaseActorDataModel from "./base-actor.mjs";

export default class SimplePlayerCharacterDataModel extends SimpleBaseActorDataModel {
    static defineSchema() {
        const fields = foundry.data.fields;
        return {
            ...super.defineSchema(),
            // resources: new fields.SchemaField({
                heropoints: new fields.SchemaField({
                    min: new fields.NumberField({required: true, integer: true, min: 0, initial: 0}),
                    max: new fields.NumberField({required: true, integer: true, min: 0, initial: 3}),
                    value: new fields.NumberField({required: true, integer: true, min: 0, initial: 1})
                }),
            // }),
            level: new fields.NumberField({ required: true, integer: true, min: 0, initial: 0, max: 30 })
        };
    }
    prepareDerivedData() {
        super.prepareDerivedData();

        // Clamp health within the appropriate range.
        const { hitpoints } = this.system;
        hitpoints.value = Math.clamp(hitpoints.value, hitpoints.min, hitpoints.max);
    }
}