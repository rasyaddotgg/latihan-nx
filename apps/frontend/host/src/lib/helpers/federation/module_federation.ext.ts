import { defineAsyncComponent } from 'vue';
// @ts-expect-error: virtual module expected to load federation modules
import {
  __federation_method_setRemote,
  __federation_method_getRemote,
} from 'virtual:__federation__';

export function getAsyncComponent(component: string, remoteUrl: string) {
  const match = remoteUrl?.match(/\/([^\\/]+)\.js$/);
  const remoteName = match ? match[1] : '';

  console.log({
    component,
    remoteName,
  });

  return defineAsyncComponent(async () => {
    await __federation_method_setRemote(remoteName, {
      url: () => Promise.resolve(remoteUrl),
      format: 'esm',
      from: 'vite',
    });

    return await __federation_method_getRemote(remoteName, component);
  });
}
