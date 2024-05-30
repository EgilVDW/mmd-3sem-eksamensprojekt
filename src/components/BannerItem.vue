<template>
  <div class="banner-item">
    <h2>
      <slot name="name"></slot>
    </h2>
    <p>
      Åben dagligt indtil
      <strong>
        <slot name="days"></slot>
      </strong>
      kl.
      <strong>
        <slot name="hours"></slot>
      </strong>
    </p>
  </div>
</template>
