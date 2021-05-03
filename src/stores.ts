import { writable } from 'svelte/store';
import type { Result } from './types';

const initialResult: Result = {
  totalResults: 0,
  videos: []
};

export const result = writable(initialResult);
