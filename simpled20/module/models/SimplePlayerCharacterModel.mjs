import SimpleBaseActorModel from "./SimpleBaseActorModel.mjs";

export default class SimplePlayerCharacterModel extends SimpleBaseActorModel {
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

}