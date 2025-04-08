import SimpleBaseItemDataModel from "./base-item.mjs";

const fields = foundry.data.fields;

export default class SimpleFeatureDataModel extends SimpleBaseItemDataModel {
  static defineSchema() {
    return {
        ...super.defineSchema(),
        

        description: new fields.SchemaField({
            biography: new fields.HTMLField({required: true, blank: true}),
            looks: new fields.HTMLField({required: true, blank: true}),
            age: new fields.NumberField ({required: true, integer: true, min:0})
        })
    };
  }
}