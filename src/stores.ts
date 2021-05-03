import { writable } from 'svelte/store';
import type { APIProps, Result, SearchParams } from './types';

const initialApiProps: APIProps = {
  endpoint: '',
  key: ''
};

const initialResult: Result = {
  totalResults: 0,
  videos: []
};

const initialSearchParams: SearchParams = {
  query: ''
};

export const apiProps = writable(initialApiProps);
export const result = writable(initialResult);
export const currentSearchParams = writable(initialSearchParams);
