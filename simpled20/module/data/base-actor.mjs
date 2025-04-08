import SimpleBaseDataModel from "./base-model.mjs";


export default class SimpleBaseActorDataModel extends SimpleBaseDataModel {
    static defineSchema() {
        
        const fields = foundry.data.fields;
        const schema = {};

        const requiredInteger = { required: true, nullable: false, integer: true };


        schema.health = new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 10, min: 0 }),
        max: new fields.NumberField({ ...requiredInteger, initial: 10 })
        });
        schema.power = new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 5, min: 0 }),
        max: new fields.NumberField({ ...requiredInteger, initial: 5 })
        });
        schema.biography = new fields.StringField({ required: true, blank: true }); // equivalent to passing ({initial: ""}) for StringFields


        schema.resources = new fields.SchemaField({});
       // const resources = schema.resources;
        schema.hitpoints = new fields.SchemaField({
            min: new fields.NumberField({required: true, integer: true, min: 0, initial: 0}),
            max: new fields.NumberField({required: true, integer: true, min: 0, initial: 10}),
            value: new fields.NumberField({required: true, integer: true, min: 0, initial: 10})
        });
        schema.speed = new fields.SchemaField({
            min: new fields.NumberField({required: true, integer: true, min: 0, initial: 0}),
            max: new fields.NumberField({required: true, integer: true, min: 0, initial: 5}),
            value: new fields.NumberField({required: true, integer: true, min: 0, initial: 5})
        });
        schema.description = new fields.SchemaField({
            biography: new fields.HTMLField({required: true, blank: true}),
            looks: new fields.HTMLField({required: true, blank: true}),
            age: new fields.NumberField ({required: true, integer: true, min:0})
        });
        schema.armorclass = new fields.SchemaField({
            min: new fields.NumberField({required: true, integer: true, min: 0, initial: 0}),
            max: new fields.NumberField({required: true, integer: true, min: 0, initial: 30}),
            value: new fields.NumberField({required: true, integer: true, min: 0, initial: 10})
        });
        return schema;
    }
}