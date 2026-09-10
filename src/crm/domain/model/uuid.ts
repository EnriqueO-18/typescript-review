import { v7 as uuidv7, validate as uuidValidate } from 'uuid';

/**
 * Provides a UUID generator.
 *
 * @returns A UUID version 7 value
 */
export const generateUUID: () => string = (): string => { return uuidv7(); }

/**
 * Validates a UUID.
 *
 * @param uuid - The UUID to validate.
 */
export const validateUUID: (uuid: string) => boolean = (uuid: string): boolean => { return uuidValidate(uuid); }