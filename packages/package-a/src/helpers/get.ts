/**
 * Get an item
 * @param id: Item Id
 */
export function get(id: string): Promise<boolean> {
  return Promise.resolve(false);
}

export function push(id: string): Promise<boolean> {
  return Promise.reject(id);
}