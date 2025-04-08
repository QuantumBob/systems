export class SimpleActorSheet extends ActorSheet {

    //* @override */
    static get defaultOptions() {
        
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["simpled20"],
            width: 600,
            height: 600,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "features" }]
        });
  }

  /** @override */
  get template() {
    let name;
    if (this.actor.type == "Player Character")
        name = "pc";
    // return `systems/simpled20/templates/actor/actor-${this.actor.type}-sheet.hbs`;
    return `systems/simpled20/templates/actor/actor-${name}-sheet.hbs`;
  }

  /** @override */
    getData() {
        // Retrieve the data structure from the base sheet. You can inspect or log
        // the context variable to see the structure, but some key properties for
        // sheets are the actor object, the data object, whether or not it's
        // editable, the items array, and the effects array.
        const context = super.getData();

        // Use a safe clone of the actor data for further operations.
        const actorData = context.data;

        // Add the actor's data to context.data for easier access, as well as flags.
        context.system = actorData.system;
        context.flags = actorData.flags;

        // Prepare character data and items.
        if (actorData.type == 'Player Character') {
            // this._prepareItems(context);
            // this._prepareCharacterData(context);
        }

        // Prepare NPC data and items.
        if (actorData.type == 'NonPlayer Character') {
            // this._prepareItems(context);
        }

        // Add roll data for TinyMCE editors.
        context.rollData = context.actor.getRollData();

        // Prepare active effects
        // context.effects = prepareActiveEffectCategories(
        //     // A generator that returns all effects stored on the actor
        //     // as well as any items
        //     this.actor.allApplicableEffects()
        // );

        return context;
    }

    /**
     * Organize and classify Items for Character sheets.
     *
     * @param {Object} actorData The actor to prepare.
     *
     * @return {undefined}
     */
    _prepareItems(context) {
    // Initialize containers.
    const gear = [];
    const features = [];
    const spells = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: []
    };

    // Iterate through items, allocating to containers
    for (let i of context.items) {
        i.img = i.img || DEFAULT_TOKEN;
        // Append to gear.
        if (i.type === 'item') {
        gear.push(i);
        }
        // Append to features.
        else if (i.type === 'feature') {
        features.push(i);
        }
        // Append to spells.
        else if (i.type === 'spell') {
        if (i.system.spellLevel != undefined) {
            spells[i.system.spellLevel].push(i);
        }
        }
    }

    // Assign and return
    context.gear = gear;
    context.features = features;
    context.spells = spells;
    }

    /**
     * Organize and classify Items for Character sheets.
     *
     * @param {Object} actorData The actor to prepare.
     *
     * @return {undefined}
     */
    _prepareCharacterData(context) {
        // Handle translation for ability scores.
        // for (let [k, v] of Object.entries(context.system.abilities)) {
        //     v.label = game.i18n.localize(CONFIG.BOILERPLATE.abilities[k]) ?? k;
        // }
    }
}