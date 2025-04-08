import SimpleBaseActorDataModel from "./base-actor.mjs";

const fields = foundry.data.fields;

export default class SimpleNonPlayerCharacterDataModel extends SimpleBaseActorDataModel {
    static defineSchema(){
        return {
            ...super.defineSchema()
             
        };
    }
}