const fields = foundry.data.fields;

export default class SimpleBaseItemModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        const requiredInteger = { required: true, nullable: false, integer: true };
        return {
            rarity: new fields.StringField({
                reqired: true,
                blank: false,
                options: ["common", "uncommon", "rare", "legendary"],
                initial: "common"
            }),
            // price: new fields.NumberField({ required: true, integer: true, min: 0, initial: 20 }),
            resources: new fields.SchemaField({
                price: new fields.SchemaField({
                    value: new fields.NumberField({...requiredInteger, min: 0, initial: 20}),
                    poor: new fields.NumberField({...requiredInteger, min: 10, initial: 10}),
                    average: new fields.NumberField({...requiredInteger, min: 20, initial: 20}),
                    good: new fields.NumberField({...requiredInteger, min: 30, initial: 30})
                })
            }),
            biography: new fields.HTMLField({required: true, blank: true}),
        };
    }
}