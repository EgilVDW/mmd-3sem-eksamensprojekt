<template>
  <div class="topic-card">
    <slot name="icon"></slot>
    <div>
      <h3>
        <slot name="title"></slot>
      </h3>
      <h4>
        <slot name="description"></slot>
      </h4>
    </div>
  </div>
</template>
