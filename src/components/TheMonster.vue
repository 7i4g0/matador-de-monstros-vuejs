<template>
  <div class="character">
    <div ref="monster" :class="['dragon', takeStatus]" @click="doAttack"></div>
    <p class="damage">{{damage}}</p>
    <h1>{{ monsterName }}</h1>
    <div class="life-bar" :class="{'d-none': life < 1}">
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
  name: 'TheMonster',
  data () {
    return {
      monsterName: 'Dragon'
    }
  },
  props: {
    status: {
      type: String,
      default: '',
      validator: value => [
        '',
        'iddle',
        'attack',
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
    this.$refs.monster.addEventListener('animationstart', this.listener, false)
  },
  computed: {
    takeStatus () {
      return `dragon--${this.status}`
    }
  },
  methods: {
    doAttack () {
      this.$refs.monster.classList.replace('iddle', 'attack')
      this.$emit('fired', true)

      setTimeout(() => {
        this.$refs.monster.classList.replace('attack', 'iddle')
      }, 720)
    },
    listener (e) {
      if (e.animationName.startsWith('death')) {
        setTimeout(() => {
          e.target.classList.replace('dragon--death', 'dragon--staydeath')
        }, 600);
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.dragon
  background-image: url('../assets/sprite-dragon.png')
  width: 323px
  height: 250px
  transform: scaleX(-1)

  &--iddle
    animation: iddle 700ms steps(3) infinite

  &--attack
    background-position-y: -248px
    animation: attack 700ms steps(4)

  &--hurt
    background-position-y: -495px
    animation: hurt 1200ms steps(2) 200ms infinite

  &--death
    background-position-y: -742px
    animation: death 700ms steps(5)

  &--staydeath
    background-position: -1305px -742px
    opacity: 0.5

.damage
  position: absolute
  bottom: 30%
  right: 20%
  font-size: 2em
  color: #D32F2F
  text-shadow: 2px 2px 3px black
  animation: damage 1200ms forwards

@keyframes damage
  to
    bottom: 45%
    font-size: 4em
    opacity: 0.8

@keyframes iddle
  to
    background-position-x: -975px

@keyframes attack
  to
    background-position-x: -1305px

@keyframes hurt
  to
    background-position-x: -658px
    opacity: 0.7

@keyframes death
  to
    background-position-x: -1630px
    opacity: 0.5

</style>