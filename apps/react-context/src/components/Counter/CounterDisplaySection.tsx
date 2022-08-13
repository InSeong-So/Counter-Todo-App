const CounterDisplaySection = ({ count }: { count: number }) => (
  <section id="counter-display">
    <article>
      <h1 id="counter">{count}</h1>
    </article>
  </section>
);

export default CounterDisplaySection;
