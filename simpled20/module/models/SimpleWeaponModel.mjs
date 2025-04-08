import SimpleBaseItemModel from "./SimpleBaseItemModel.mjs";

const fields = foundry.data.fields;

export default class SimpleWeaponModel extends SimpleBaseItemModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      damage: new fields.NumberField({ required: true, integer: true, positive: true, initial: 5 })
    };
  }
}