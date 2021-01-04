<template>
  <div class="character">
    <div ref="hero" :class="['knight', takeStatus]" @click="doAttack"></div>
    <p class="damage" :class="{ 'heal': damage.startsWith('+') }">{{damage}}</p>
    <h1>{{ name }}</h1>
    <div class="life-bar">
      <div
        class="life"
        :class="{ 'life--warning': life < 40 , 'life--danger': life < 20 }"
        :style="{ width: life + '%' }"
      ></div>
    </div>
    <div>{{ life }}%</div>
  </div>
</template>

<script>
export default {
  name: 'TheHero',
  data () {
    return {
      monsterName: 'Player'
    }
  },
  props: {
    name: {
      type: String
    },
    status: {
      type: String,
      default: '',
      validator: value => [
        '',
        'iddle',
        'run',
        'attack',
        'special-attack',
        'healer',
        'hurt',
        'death'
      ]
        .includes(value)
    },
    life: {
      type: Number
    },
    damage: {
      type: String
    }
  },
  mounted () {
    this.$refs.hero.addEventListener('animationstart', this.listener, false)
  },
  computed: {
    takeStatus () {
      return `knight--${this.status}`
    }
  },
  methods: {
    doAttack () {
      this.$refs.hero.classList.replace('iddle', 'attack')
      this.$emit('fired', true)

      setTimeout(() => {
        this.$refs.hero.classList.replace('attack', 'iddle')
      }, 720)
    },
    listener (e) {
      if (e.animationName.startsWith('death')) {
        setTimeout(() => {
          e.target.classList.replace('knight--death', 'knight--staydeath')
        }, 1200);
      }
    }
  }
}
</script>

<style lang="sass" scoped>
$width: 100px
$height: 55px

.knight
  background-image: url('../assets/sprite-knight.png')
  width: $width
  height: $height
  margin: 0 auto

  &--iddle
    animation: iddle 700ms steps(8) infinite

  &--run
    background-position-y: -$height
    animation: run 600ms steps(8) infinite

  &--attack
    position: absolute
    right: 230px
    bottom: 100px
    background-position-y: -$height * 3
    animation: attack 1200ms steps(8) infinite

  &--special-attack
    position: absolute
    right: 230px
    bottom: 100px
    background-position-y: -$height * 2
    animation: special-attack 800ms steps(8) infinite

  &--healer
    background-position-y: -$height * 7
    animation: hurt 1200ms steps(8) 200ms infinite

  &--hurt
    background-position-y: -$height * 6
    animation: hurt 1200ms steps(8) 200ms

  &--death
    background-position-y: -$height * 5
    animation: death 1200ms steps(8) 200ms

  &--staydeath
    background-position-x: -$width * 7
    background-position-y: -$height * 5
    opacity: 0.5
.heal
  color: #4CAF50 !important

.damage
  position: absolute
  bottom: 20%
  left: 10%
  font-size: 2em
  color: #D32F2F
  text-shadow: 2px 2px 3px black
  animation: damage 1200ms forwards

@keyframes damage
  to
    bottom: 35%
    font-size: 4em
    opacity: 0.8

@keyframes iddle
  to
    background-position-x: -$width * 8

@keyframes run
  to
    background-position-x: -$width * 8

@keyframes attack
  to
    background-position-x: -$width * 8

@keyframes special-attack
  to
    background-position-x: -$width * 8

@keyframes hurt
  to
    background-position-x: -$width * 8
    opacity: 0.7

@keyframes death
  to
    background-position-x: -$width * 8
    opacity: 0.5

</style>