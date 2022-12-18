// export type Replace<T, K extends keyof T, V> = Omit<T, K> & { [P in K]: V };

// * Exports a type that will replace the type of a property in a type

export type Replace<T, R> = Omit<T, keyof R> & R;
