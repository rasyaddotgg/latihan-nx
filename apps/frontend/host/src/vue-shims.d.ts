declare module '*.vue' {
  import { defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module 'simple/SimpleButton' {
  import { DefineComponent } from 'vue';
  const SimpleButton: DefineComponent<{}, {}, any>;
  export default SimpleButton;
}

declare module 'simple/PrimeButton' {
  import { DefineComponent } from 'vue';
  const PrimeButton: DefineComponent<{}, {}, any>;
  export default PrimeButton;
}
