import { writable } from 'svelte/store';
import type { Result, SearchParams } from './types';

const initialResult: Result = {
  totalResults: 0,
  videos: []
};

const initialSearchParams: SearchParams = {
  query: ''
};

export const result = writable(initialResult);

export const currentSearchParams = writable(initialSearchParams);
