import SimpleD20DataModel from "./base-model.mjs";

export default class SimpleD20ItemBase extends SimpleD20DataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = {};

    schema.description = new fields.StringField({ required: true, blank: true });

    return schema;
  }

}