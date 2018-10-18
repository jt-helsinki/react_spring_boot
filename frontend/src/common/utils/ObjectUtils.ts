export class ObjectUtils {

    /**
     * Performs a deep clone on the source object. For object graphs deeper than one level this
     * must be used over the spread operator (...) or Object.assign().
     *
     * @param {T} source The object to clone.
     * @returns {T} The cloned object.
     */
    public static deepClone<T>(source: T): T {
        return JSON.parse(JSON.stringify(source));
    };

}