// Import document classes.
import { SystemActor } from "./documents/actor.mjs";
import { SystemItem } from "./documents/item.mjs";
// Import sheet classes.
import { SimpleActorSheet } from "./sheets/actor-sheet.mjs";
// Import helper/utility classes and constants.
import { preloadHandlebarsTemplates } from './helpers/templates.mjs';
import { SIMPLE_D20 } from './helpers/config.mjs';
// Import DataModel classes
import * as models from './data/_module.mjs';

Hooks.on("init", () => {

    // config custom documents
    CONFIG.Actor.documentClass = SystemActor;
    CONFIG.Item.documentClass= SystemItem;

    // config System Data Models
    Object.assign(CONFIG.Actor.dataModels, {
        'Player Charachter': models.SimplePlayerCharacterDataModel,
        'NonPlayer Character': models.SimpleNonPlayerCharacterDataModel
    })
    Object.assign(CONFIG.Item.dataModels, {
        weapon: models.SimpleWeaponDataModel,
        spell: models.SimpleSpellDataModel
    })




    // Configure trackable attributes
    CONFIG.Actor.trackableAttributes = {
        'Player Character': {
            bar: ["hitpoints"],
            value: ["heropoints", "armorclass"]
        },
        'NonPlayer Character': {
            bar: ["hitpoints"],
            value: ["armorclass"]
        }
    }

    // Active Effects are never copied to the Actor,
    // but will still apply to the Actor from within the Item
    // if the transfer property on the Active Effect is true.
    CONFIG.ActiveEffect.legacyTransferral = false;

    // Register sheet application classes
    Actors.unregisterSheet('core', ActorSheet);
    Actors.registerSheet('simpled20', SimpleActorSheet, {
        makeDefault: true,
        label: 'SIMPLE_D20.SheetClassCharacter',
    });
    // Items.unregisterSheet('core', ItemSheet);
    // Items.registerSheet('simpled20', SimpleItemSheet, {
    //     makeDefault: true,
    //     label: 'SIMPLE_D20.SheetClassItem',
    // });

    // Preload Handlebars templates.
    return preloadHandlebarsTemplates();
});
