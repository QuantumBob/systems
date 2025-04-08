import { TestActor } from "./documents/TestActorDoc.mjs";
import { TestCharacterModel } from "./models/TestCharacterModel.mjs"
import { TestActorSheet } from "./sheets/TestActorSheet.mjs";

Hooks.on("init", () => {

    // config custom documents
    CONFIG.Actor.documentClass = TestActor;

    // config System Data Models
    Object.assign(CONFIG.Actor.dataModels, {
        character: TestCharacterModel
    })

    CONFIG.Actor.trackableAttributes = {
        character: {
            bar: ["resources.hitpoints"]
        }
    };

    // Register sheet application classes
    Actors.unregisterSheet('core', ActorSheet);
    Actors.registerSheet('testsystem', TestActorSheet, {
        makeDefault: true,
        label: 'TEST.SheetClassCharacter',
    });
});

// Hooks.on("ready", async () => {
    // let actor = await TestActor.create({
    //     name: "Cool Test Actor",
    //     type: "character",
    //     img: ""
    //     });
    // console.log(actor); // The created actor data structure
// });