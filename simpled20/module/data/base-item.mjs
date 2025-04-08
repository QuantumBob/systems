const fields = foundry.data.fields;

export default class SimpleBaseItemDataModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            rarity: new fields.StringField({
                reqired: true,
                blank: false,
                options: ["common", "uncommon", "rare", "legendary"],
                initial: "common"
            }),
            price: new fields.NumberField({ required: true, integer: true, min: 0, initial: 20 }),
            biography: new fields.HTMLField({required: true, blank: true}),
        };
    }
}