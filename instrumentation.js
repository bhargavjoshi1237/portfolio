// Runs once when the Next.js server starts (Node runtime).
//
// Some environments launch Node with `--localstorage-file` (Node's experimental
// Web Storage). When the flag is given without a valid path, Node installs a
// `globalThis.localStorage` whose methods are NOT real functions, so any library
// that touches `localStorage` during SSR crashes with
// "localStorage.getItem is not a function" and the page 500s.
//
// We can't render `localStorage` in a real browser on the server, so we replace
// the broken global with a harmless no-op shim. Reads return null (libraries fall
// back to their defaults) and writes are ignored — exactly how a non-browser
// environment should behave.
export async function register() {
  if (process.env.NEXT_RUNTIME !== 'nodejs') return;

  // Only act on the BROKEN case: a localStorage that EXISTS but whose methods
  // aren't real functions. A genuinely absent localStorage (normal server) must
  // stay absent, so SSR libraries keep detecting "not a browser" correctly.
  const ls = globalThis.localStorage;
  const isBroken =
    ls !== undefined && ls !== null && typeof ls.getItem !== 'function';

  if (!isBroken) return;

  const noopStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    key: () => null,
    length: 0,
  };

  try {
    Object.defineProperty(globalThis, 'localStorage', {
      value: noopStorage,
      configurable: true,
      writable: true,
    });
  } catch {
    // If the global is locked down for some reason, fall back to assignment.
    try {
      globalThis.localStorage = noopStorage;
    } catch {}
  }
}
