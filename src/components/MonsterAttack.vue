<template>
  <div ref="monster_attack" class="fire"></div>
</template>

<script>
export default {
  name: 'MonsterAttack'
}
</script>

<style lang="sass">
.fire
  position: absolute
  z-index: 2
  top: 110px
  right: 80px
  background-image: url('../assets/sprite.png')
  background-position-x: 120px
  background-position-y: bottom
  width: 127px
  height: 127px
  transform: scaleX(-1)

  &.play
    animation: default_animation 1s steps(6) 230ms

  @keyframes default_animation
    to
      background-position-x: -654px
      right: 100%
      transform: scaleX(-1)
  
</style>