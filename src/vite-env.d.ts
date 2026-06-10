/// <reference types="vite/client" />

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'behold-widget': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { 'feed-id'?: string },
        HTMLElement
      >;
    }
  }
}
