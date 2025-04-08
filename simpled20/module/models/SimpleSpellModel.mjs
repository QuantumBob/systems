import SimpleBaseItemModel from "./SimpleBaseItemModel.mjs";

const fields = foundry.data.fields;

export default class SimpleSpellModel extends SimpleBaseItemModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      cost: new fields.NumberField({ required: true, integer: true, positive: true, initial: 2 })
    };
  }
}