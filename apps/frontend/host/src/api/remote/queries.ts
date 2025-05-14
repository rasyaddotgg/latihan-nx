import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';

const apiRemotePosition = axios.create({
  baseURL: 'http://localhost:3000/api/remote-position',
});

// Query fn

export function getBanner() {
  return apiRemotePosition.get('BANNER').then((res) => res.data);
}

// Custom hoook

export function useBanner() {
  return useQuery({
    queryKey: ['banner'],
    queryFn: () => getBanner(),
  });
}
