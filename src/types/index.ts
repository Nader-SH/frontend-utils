/**
 * Makes all properties of T deeply partial (recursive)
 * @example
 * type User = { name: string; address: { city: string } };
 * type PartialUser = DeepPartial<User>; // { name?: string; address?: { city?: string } }
 */
export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

/**
 * Makes T nullable (T | null)
 * @example
 * type MaybeString = Nullable<string>; // string | null
 */
export type Nullable<T> = T | null;

/**
 * Makes T optional (T | undefined)
 * @example
 * type MaybeString = Optional<string>; // string | undefined
 */
export type Optional<T> = T | undefined;

/**
 * Extracts the value type from an object type
 * @example
 * type User = { name: string; age: number };
 * type UserValue = ValueOf<User>; // string | number
 */
export type ValueOf<T> = T[keyof T];

