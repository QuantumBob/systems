 export class SimpleItem extends Item {
    get isFree() {
        return this.price < 1;
    }
    prepareDerivedData() {
        super.prepareDerivedData();

        // Clamp health within the appropriate range.
        const { price } = this.system.resources;
        price.value = price.good;
    }
}