# frontend-utils

A comprehensive, tree-shakable TypeScript utility library for front-end projects. Works with React, Vue, Angular, Svelte, or Vanilla JS.

## Features

- 🌳 **Tree-shakable** - Import only what you need
- 📦 **TypeScript** - Full type safety and IntelliSense support
- 🧪 **Well-tested** - Comprehensive unit tests with Vitest
- 🚀 **Modern** - ES modules and CommonJS support
- 📚 **Well-documented** - JSDoc comments for all utilities

## Installation

```bash
npm install frontend-utils
# or
yarn add frontend-utils
# or
pnpm add frontend-utils
```

## Usage

### Import individual utilities

```typescript
import { capitalize, debounce, formatDate } from 'frontend-utils';

const text = capitalize('hello world'); // 'Hello world'
const debouncedFn = debounce(() => console.log('Hello'), 300);
const formatted = formatDate(new Date()); // '1/15/2023'
```

### Import React hooks

```typescript
import { useDebounce, useLocalStorage } from 'frontend-utils/react';

function MyComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 300);
  const [user, setUser] = useLocalStorage('user', { name: 'Guest' });
  
  // ...
}
```

## API Reference

### String Utilities

#### `capitalize(str: string): string`
Capitalizes the first letter of a string.

```typescript
capitalize('hello') // 'Hello'
capitalize('HELLO') // 'Hello'
```

#### `camelCase(str: string): string`
Converts a string to camelCase.

```typescript
camelCase('hello world') // 'helloWorld'
camelCase('hello-world') // 'helloWorld'
```

#### `kebabCase(str: string): string`
Converts a string to kebab-case.

```typescript
kebabCase('hello world') // 'hello-world'
kebabCase('HelloWorld') // 'hello-world'
```

#### `truncate(str: string, length: number, suffix?: string): string`
Truncates a string to a specified length.

```typescript
truncate('Hello world', 5) // 'Hello...'
truncate('Hello world', 5, '') // 'Hello'
```

#### `stripHTML(str: string): string`
Removes HTML tags from a string.

```typescript
stripHTML('<p>Hello <b>world</b></p>') // 'Hello world'
```

#### `randomString(length?: number, chars?: string): string`
Generates a random string.

```typescript
randomString(8) // 'aB3dEf9h'
randomString(8, '0123456789') // '12345678'
```

#### `normalizeString(str: string): string`
Normalizes a string by removing diacritics.

```typescript
normalizeString('Café') // 'cafe'
normalizeString('Müller') // 'muller'
```

#### `isEmail(str: string): boolean`
Validates if a string is a valid email address.

```typescript
isEmail('user@example.com') // true
isEmail('invalid-email') // false
```

#### `isPhone(str: string): boolean`
Validates if a string is a valid phone number.

```typescript
isPhone('+1234567890') // true
isPhone('(123) 456-7890') // true
```

### Number Utilities

#### `clamp(value: number, min: number, max: number): number`
Clamps a number between min and max.

```typescript
clamp(15, 0, 10) // 10
clamp(-5, 0, 10) // 0
clamp(5, 0, 10) // 5
```

#### `randomInt(min?: number, max?: number): number`
Generates a random integer.

```typescript
randomInt(1, 10) // Random number between 1 and 10
```

#### `isNumeric(value: unknown): boolean`
Checks if a value is numeric.

```typescript
isNumeric(123) // true
isNumeric('123') // true
isNumeric('abc') // false
```

#### `roundTo(value: number, decimals?: number): number`
Rounds a number to specified decimal places.

```typescript
roundTo(3.14159, 2) // 3.14
roundTo(3.14159, 0) // 3
```

#### `percentage(value: number, total: number, decimals?: number): number`
Calculates percentage.

```typescript
percentage(25, 100) // 25
percentage(1, 3) // 33.33
```

#### `formatNumber(value: number, locale?: string, options?: Intl.NumberFormatOptions): string`
Formats a number with thousand separators.

```typescript
formatNumber(1234567.89) // '1,234,567.89'
formatNumber(1234567.89, 'de-DE') // '1.234.567,89'
```

### Date Utilities

#### `formatDate(date: Date | string | number, format?: string | Intl.DateTimeFormatOptions, options?: Intl.DateTimeFormatOptions): string`
Formats a date.

```typescript
formatDate(new Date('2023-01-15')) // '1/15/2023'
formatDate(new Date('2023-01-15'), 'en-GB') // '15/01/2023'
```

#### `timeAgo(date: Date | string | number, now?: Date): string`
Returns a human-readable time ago string.

```typescript
timeAgo(new Date(Date.now() - 3600000)) // '1 hour ago'
timeAgo(new Date(Date.now() - 86400000)) // '1 day ago'
```

#### `isValidDate(value: unknown): value is Date`
Checks if a value is a valid Date object.

```typescript
isValidDate(new Date()) // true
isValidDate(new Date('invalid')) // false
```

#### `addDays(date: Date | string | number, days: number): Date`
Adds days to a date.

```typescript
addDays(new Date('2023-01-15'), 5) // Date object for 2023-01-20
```

#### `subtractDays(date: Date | string | number, days: number): Date`
Subtracts days from a date.

```typescript
subtractDays(new Date('2023-01-15'), 5) // Date object for 2023-01-10
```

#### `compareDates(date1: Date | string | number, date2: Date | string | number): number`
Compares two dates.

```typescript
compareDates(new Date('2023-01-15'), new Date('2023-01-20')) // -1
compareDates(new Date('2023-01-15'), new Date('2023-01-15')) // 0
```

#### `getDayName(date: Date | string | number, locale?: string, format?: 'long' | 'short' | 'narrow'): string`
Gets the day name.

```typescript
getDayName(new Date('2023-01-15')) // 'Sunday'
getDayName(new Date('2023-01-15'), 'en-US', 'short') // 'Sun'
```

#### `getMonthName(date: Date | string | number, locale?: string, format?: 'long' | 'short' | 'narrow'): string`
Gets the month name.

```typescript
getMonthName(new Date('2023-01-15')) // 'January'
getMonthName(new Date('2023-01-15'), 'en-US', 'short') // 'Jan'
```

### Array Utilities

#### `unique<T>(arr: T[]): T[]`
Returns unique values from an array.

```typescript
unique([1, 2, 2, 3, 3, 3]) // [1, 2, 3]
```

#### `chunk<T>(arr: T[], size: number): T[][]`
Splits an array into chunks.

```typescript
chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
```

#### `flatten<T>(arr: (T | T[])[], depth?: number): T[]`
Flattens a nested array.

```typescript
flatten([1, [2, 3], [4, [5]]]) // [1, 2, 3, 4, [5]]
flatten([1, [2, 3], [4, [5]]], 2) // [1, 2, 3, 4, 5]
```

#### `shuffle<T>(arr: T[]): T[]`
Shuffles an array.

```typescript
shuffle([1, 2, 3, 4, 5]) // [3, 1, 5, 2, 4] (random order)
```

#### `sortByKey<T>(arr: T[], key: keyof T, direction?: 'asc' | 'desc'): T[]`
Sorts an array of objects by a key.

```typescript
sortByKey([{ name: 'Bob', age: 30 }, { name: 'Alice', age: 25 }], 'age')
// [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]
```

#### `removeItem<T>(arr: T[], item: T): T[]`
Removes an item from an array.

```typescript
removeItem([1, 2, 3, 2], 2) // [1, 3]
```

#### `groupBy<T>(arr: T[], key: keyof T | ((item: T) => string | number)): Record<string, T[]>`
Groups an array by a key.

```typescript
groupBy([{ type: 'fruit', name: 'apple' }, { type: 'fruit', name: 'banana' }, { type: 'veg', name: 'carrot' }], 'type')
// { fruit: [...], veg: [...] }
```

### Object Utilities

#### `deepClone<T>(obj: T): T`
Creates a deep clone of an object.

```typescript
const obj = { a: 1, b: { c: 2 } };
const cloned = deepClone(obj);
cloned.b.c = 3;
// obj.b.c is still 2
```

#### `deepMerge<T>(target: T, ...sources: Partial<T>[]): T`
Deeply merges objects.

```typescript
deepMerge({ a: 1, b: { c: 2 } }, { b: { d: 3 }, e: 4 })
// { a: 1, b: { c: 2, d: 3 }, e: 4 }
```

#### `isEmptyObject(obj: unknown): boolean`
Checks if an object is empty.

```typescript
isEmptyObject({}) // true
isEmptyObject({ a: 1 }) // false
```

#### `omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>`
Creates an object with omitted properties.

```typescript
omit({ a: 1, b: 2, c: 3 }, ['a', 'c']) // { b: 2 }
```

#### `pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>`
Creates an object with only specified properties.

```typescript
pick({ a: 1, b: 2, c: 3 }, ['a', 'c']) // { a: 1, c: 3 }
```

#### `getNestedValue<T>(obj: Record<string, unknown>, path: string, defaultValue?: T): T | undefined`
Gets a nested value from an object.

```typescript
getNestedValue({ user: { profile: { name: 'John' } } }, 'user.profile.name') // 'John'
getNestedValue({ user: { profile: { name: 'John' } } }, 'user.profile.age', 0) // 0
```

### Validation Utilities

#### `isEmail(str: string): boolean`
Validates email address.

```typescript
isEmail('user@example.com') // true
```

#### `isURL(str: string): boolean`
Validates URL.

```typescript
isURL('https://example.com') // true
```

#### `isPhoneNumber(str: string): boolean`
Validates phone number.

```typescript
isPhoneNumber('+1234567890') // true
```

#### `isStrongPassword(str: string): boolean`
Validates strong password.

```typescript
isStrongPassword('MyP@ssw0rd') // true
```

#### `isJSON(str: string): boolean`
Validates JSON string.

```typescript
isJSON('{"key": "value"}') // true
```

#### `isUUID(str: string): boolean`
Validates UUID.

```typescript
isUUID('550e8400-e29b-41d4-a716-446655440000') // true
```

#### `isEmpty(value: unknown): boolean`
Checks if a value is empty.

```typescript
isEmpty('') // true
isEmpty([]) // true
isEmpty({}) // true
isEmpty(null) // true
```

### DOM Utilities

#### `addClass(element: Element | string, className: string): void`
Adds a CSS class to an element.

```typescript
addClass('#myElement', 'active')
addClass(document.querySelector('.item'), 'highlighted')
```

#### `removeClass(element: Element | string, className: string): void`
Removes a CSS class from an element.

```typescript
removeClass('#myElement', 'active')
```

#### `toggleClass(element: Element | string, className: string): boolean`
Toggles a CSS class on an element.

```typescript
toggleClass('#myElement', 'active')
```

#### `scrollToTop(behavior?: ScrollBehavior): void`
Scrolls to the top.

```typescript
scrollToTop() // smooth scroll
scrollToTop('auto') // instant scroll
```

#### `scrollToBottom(behavior?: ScrollBehavior): void`
Scrolls to the bottom.

```typescript
scrollToBottom()
```

#### `isInViewport(element: Element | string, partial?: boolean): boolean`
Checks if an element is in the viewport.

```typescript
isInViewport('#myElement') // true if visible
isInViewport('#myElement', true) // true if partially visible
```

#### `getOffset(element: Element | string): { top: number; left: number }`
Gets the offset position of an element.

```typescript
getOffset('#myElement') // { top: 100, left: 50 }
```

### Storage Utilities

#### `setLocal<T>(key: string, value: T): void`
Sets a value in localStorage.

```typescript
setLocal('user', { name: 'John', age: 30 })
setLocal('theme', 'dark')
```

#### `getLocal<T>(key: string, defaultValue?: T): T | undefined`
Gets a value from localStorage.

```typescript
const user = getLocal('user', { name: 'Guest' })
const theme = getLocal('theme', 'light')
```

#### `removeLocal(key: string): void`
Removes a value from localStorage.

```typescript
removeLocal('user')
```

#### `setSession<T>(key: string, value: T): void`
Sets a value in sessionStorage.

```typescript
setSession('tempData', { id: 123 })
```

#### `getSession<T>(key: string, defaultValue?: T): T | undefined`
Gets a value from sessionStorage.

```typescript
const tempData = getSession('tempData', {})
```

#### `removeSession(key: string): void`
Removes a value from sessionStorage.

```typescript
removeSession('tempData')
```

#### `copyToClipboard(text: string): Promise<void>`
Copies text to clipboard.

```typescript
await copyToClipboard('Hello World')
```

#### `downloadFile(content: string | Blob, filename: string, mimeType?: string): void`
Downloads a file.

```typescript
downloadFile('Hello World', 'hello.txt')
downloadFile(new Blob(['data']), 'data.bin', 'application/octet-stream')
```

### Async Utilities

#### `sleep(ms: number): Promise<void>`
Creates a promise that resolves after a delay.

```typescript
await sleep(1000) // waits 1 second
```

#### `retry<T>(fn: () => Promise<T>, retries?: number, delay?: number): Promise<T>`
Retries an async function.

```typescript
const result = await retry(() => fetchData(), 3, 1000)
```

#### `debouncePromise<T>(fn: T, delay: number): (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>>`
Debounces a promise-returning function.

```typescript
const debouncedFetch = debouncePromise(fetchData, 300)
await debouncedFetch() // only the last call will resolve
```

#### `timeoutPromise<T>(promise: Promise<T>, timeout: number, errorMessage?: string): Promise<T>`
Wraps a promise with a timeout.

```typescript
const result = await timeoutPromise(fetchData(), 5000, 'Request timed out')
```

### Performance Utilities

#### `debounce<T>(fn: T, delay: number): (...args: Parameters<T>) => void`
Debounces a function.

```typescript
const debouncedSearch = debounce((query) => search(query), 300)
debouncedSearch('hello') // will only execute after 300ms of no calls
```

#### `throttle<T>(fn: T, delay: number): (...args: Parameters<T>) => void`
Throttles a function.

```typescript
const throttledScroll = throttle(() => handleScroll(), 100)
throttledScroll() // will execute at most once per 100ms
```

#### `memoize<T>(fn: T, keyFn?: (...args: Parameters<T>) => string): (...args: Parameters<T>) => ReturnType<T>`
Memoizes a function.

```typescript
const memoizedExpensive = memoize((n) => expensiveCalculation(n))
memoizedExpensive(5) // calculates and caches
memoizedExpensive(5) // returns cached result
```

### Network Utilities

#### `fetchJSON<T>(url: string, options?: RequestInit): Promise<T>`
Fetches JSON data.

```typescript
const data = await fetchJSON('/api/users')
const user = await fetchJSON('/api/user/1', { method: 'POST', body: JSON.stringify({ name: 'John' }) })
```

#### `fetchWithTimeout(url: string, timeout?: number, options?: RequestInit): Promise<Response>`
Fetches with timeout.

```typescript
const response = await fetchWithTimeout('/api/data', 3000)
```

#### `parseQueryString(queryString?: string): Record<string, string>`
Parses a query string.

```typescript
parseQueryString('?name=John&age=30') // { name: 'John', age: '30' }
parseQueryString() // parses window.location.search
```

#### `createQueryString(params: Record<string, string | number | boolean>): string`
Creates a query string.

```typescript
createQueryString({ name: 'John', age: 30 }) // '?name=John&age=30'
```

### React Hooks

#### `useDebounce<T>(value: T, delay?: number): T`
Debounces a value.

```typescript
const [searchTerm, setSearchTerm] = useState('');
const debouncedSearch = useDebounce(searchTerm, 300);
```

#### `useThrottle<T>(value: T, delay?: number): T`
Throttles a value.

```typescript
const [scrollY, setScrollY] = useState(0);
const throttledScroll = useThrottle(scrollY, 100);
```

#### `useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void]`
Manages localStorage with React state.

```typescript
const [user, setUser] = useLocalStorage('user', { name: 'Guest' });
setUser({ name: 'John' }); // updates both state and localStorage
```

#### `useSessionStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void]`
Manages sessionStorage with React state.

```typescript
const [viewMode, setViewMode] = useSessionStorage('viewMode', 'list');
```

#### `usePrevious<T>(value: T): T | undefined`
Returns the previous value.

```typescript
const [count, setCount] = useState(0);
const prevCount = usePrevious(count);
```

#### `useBoolean(initialValue?: boolean)`
Manages boolean state with convenient helpers.

```typescript
const { value, toggle, setTrue, setFalse } = useBoolean(false);
toggle(); // toggles the value
setTrue(); // sets to true
setFalse(); // sets to false
```

#### `useUpdateEffect(effect: () => void | (() => void), deps: unknown[]): void`
Runs an effect only on updates.

```typescript
useUpdateEffect(() => {
  console.log('Component updated');
}, [someValue]);
```

### Security Utilities

#### `sanitizeInput(input: string): string`
Sanitizes user input by escaping HTML.

```typescript
sanitizeInput('<script>alert("xss")</script>') // '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
```

#### `hashString(str: string, algorithm?: string): Promise<string>`
Hashes a string using Web Crypto API.

```typescript
const hash = await hashString('password123')
```

#### `secureCompare(a: string, b: string): boolean`
Performs constant-time string comparison.

```typescript
secureCompare('secret', 'secret') // true
secureCompare('secret', 'wrong') // false
```

### Misc Utilities

#### `uuid(): string`
Generates a UUID v4.

```typescript
uuid() // '550e8400-e29b-41d4-a716-446655440000'
```

#### `generateId(prefix?: string, length?: number): string`
Generates a unique ID.

```typescript
generateId() // 'a1b2c3d4'
generateId('user', 12) // 'user_a1b2c3d4e5f6'
```

#### `isClient(): boolean`
Checks if running in browser.

```typescript
if (isClient()) {
  // browser-only code
}
```

#### `isServer(): boolean`
Checks if running on server.

```typescript
if (isServer()) {
  // server-only code
}
```

### Types

#### `DeepPartial<T>`
Makes all properties deeply partial.

```typescript
type User = { name: string; address: { city: string } };
type PartialUser = DeepPartial<User>; // { name?: string; address?: { city?: string } }
```

#### `Nullable<T>`
Makes T nullable.

```typescript
type MaybeString = Nullable<string>; // string | null
```

#### `Optional<T>`
Makes T optional.

```typescript
type MaybeString = Optional<string>; // string | undefined
```

#### `ValueOf<T>`
Extracts value type from object.

```typescript
type User = { name: string; age: number };
type UserValue = ValueOf<User>; // string | number
```

## Tree Shaking

This package is fully tree-shakable. Import only what you need:

```typescript
// ✅ Good - only imports what you use
import { capitalize, debounce } from 'frontend-utils';

// ❌ Avoid - imports everything
import * as utils from 'frontend-utils';
```

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build
npm run build

# Type check
npm run typecheck
```

## License

MIT
