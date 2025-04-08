import SimpleBaseItemDataModel from "./base-item.mjs";

const fields = foundry.data.fields;

export default class SimpleSpellDataModel extends SimpleBaseItemDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      cost: new fields.NumberField({ required: true, integer: true, positive: true, initial: 2 })
    };
  }
}