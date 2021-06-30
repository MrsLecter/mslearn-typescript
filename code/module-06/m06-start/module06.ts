/*  Module 6: DGenerics in TypeScript
    Lab Start */

/*  DataStore is a utility function that can store up to 10 string values in an array. 
    Rewrite the DataStore class so the array can store items of any type.
 */
class DataStore<T> {

    private _data: Array<T> = new Array(10);

    AddOrUpdate(index: number, item: T) {
        if (index >= 0 && index < 10) {
            this._data[index] = item;
        }
    }
    GetData(index: number) {
        if (index >= 0 && index < 10) {
            return this._data[index];
        } else {
            return
        }
    }

}

let cnumbers = new DataStore<number>();
