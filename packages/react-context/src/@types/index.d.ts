declare module 'counter' {
  export interface CounterId {
    button: 'increment' | 'decrement' | 'reset';
    icon: 'fa fa-plus' | 'fa fa-minus' | 'fa fa-refresh';
  }

  export interface CounterProps {
    ids: CounterId[];
    isAsync: boolean;
    handleClick: (event: React.MouseEvent, isAsync?: boolean) => void;
  }
}
