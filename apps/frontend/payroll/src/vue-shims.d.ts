declare module '*.vue' {
  import { defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module 'host/stores/*' {
  import { StoreDefinition } from 'pinia';
  const store: StoreDefinition;
  export default store;
}
