import SimpleBaseModel from "./SimpleBaseModel.mjs";


export default class SimpleBaseActorModel extends SimpleBaseModel {
    static defineSchema() {
        
        const fields = foundry.data.fields;
        const schema = {};

        const requiredInteger = { required: true, nullable: false, integer: true };

        // return {
        //     resources: new fields.SchemaField({
        //         hitpoints: new fields.SchemaField({
        //             min: new fields.NumberField({...requiredInteger, min: 0, initial: 0}),
        //             max: new fields.NumberField({...requiredInteger, min: 0, initial: 10}),
        //             value: new fields.NumberField({...requiredInteger, min: 0, initial: 5})
        //         })
        //     })
        // }

        // schema.resources = new fields.SchemaField({});
    
        schema.resources = new fields.SchemaField({
            hitpoints: new fields.SchemaField({
                min: new fields.NumberField({...requiredInteger, min: 0, initial: 0}),
                max: new fields.NumberField({...requiredInteger, min: 0, initial: 10}),
                value: new fields.NumberField({...requiredInteger, min: 0, initial: 5})
            })
        });

        schema.speed = new fields.SchemaField({
            min: new fields.NumberField({...requiredInteger, min: 0, initial: 0}),
            max: new fields.NumberField({...requiredInteger, min: 0, initial: 5}),
            value: new fields.NumberField({...requiredInteger, min: 0, initial: 5})
        });
        schema.description = new fields.SchemaField({
            biography: new fields.HTMLField({required: true, blank: true}),
            looks: new fields.HTMLField({required: true, blank: true}),
            age: new fields.NumberField ({...requiredInteger, min:0, initial: 21})
        });
        schema.armorclass = new fields.SchemaField({
            min: new fields.NumberField({...requiredInteger, min: 0, initial: 0}),
            max: new fields.NumberField({...requiredInteger, min: 0, initial: 30}),
            value: new fields.NumberField({...requiredInteger, min: 0, initial: 10})
        });
        return schema;
    }
}