import { describe, it, expect } from 'vitest';
import { uuid, generateId, isClient, isServer } from '../src/misc';

describe('Misc Utilities', () => {
  describe('uuid', () => {
    it('should generate UUID', () => {
      const id = uuid();
      expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    });
  });

  describe('generateId', () => {
    it('should generate ID', () => {
      const id = generateId();
      expect(id.length).toBe(8);
    });

    it('should generate ID with prefix', () => {
      const id = generateId('user', 12);
      expect(id).toMatch(/^user_[a-zA-Z0-9]{12}$/);
    });
  });

  describe('isClient', () => {
    it('should check if client', () => {
      expect(isClient()).toBe(true);
    });
  });

  describe('isServer', () => {
    it('should check if server', () => {
      expect(isServer()).toBe(false);
    });
  });
});

