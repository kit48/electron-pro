export function oneKeyInput(input: Electron.Input, key: string) {
  return (
    input.key.toLowerCase() === key &&
    input.type.toLowerCase() === 'keyup' &&
    !input.control &&
    !input.shift &&
    !input.alt &&
    !input.meta
  );
}
