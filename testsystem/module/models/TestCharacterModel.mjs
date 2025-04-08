export class TestCharacterModel extends foundry.abstract.TypeDataModel {

    static defineSchema() {
        const fields = foundry.data.fields;
        return {
            resources: new fields.SchemaField({
                hitpoints: new fields.SchemaField({
                    min: new fields.NumberField({required: true, integer: true, min: 0, initial: 0}),
                    max: new fields.NumberField({required: true, integer: true, min: 0, initial: 3}),
                    value: new fields.NumberField({required: true, integer: true, min: 0, initial: 1})
                })
            })     
        };
    }
}