<div><slot /></div>
<style>
  div {
    display:grid;
    grid-template-rows: var(--size-8) 1fr var(--size-8);
    height:100%;
    width:100%;
    overflow: hidden;
  }
</style>