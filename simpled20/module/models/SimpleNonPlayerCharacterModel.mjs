import SimpleBaseActorModel from "./SimpleBaseActorModel.mjs";

const fields = foundry.data.fields;

export default class SimpleNonPlayerCharacterModel extends SimpleBaseActorModel {
    static defineSchema(){
        return {
            ...super.defineSchema()
             
        };
    }
}