<template>
  <div class="main">
    <div class="panel">
      <div class="container arena">
        <div class="score">
          <h1>Title</h1>
          <div class="life-bar">
            <div
              class="life"
              :class="{ danger: playerLife < 20 }"
              :style="{ width: playerLife + '%' }"
            ></div>
          </div>
          <div>{{ playerLife }}%</div>
        </div>
        <the-monster :status="monsterStatus" :life="monsterLife" />
        <monster-attack :class="{'play': fired}" />
      </div>
    </div>
    <div v-if="hasResult" class="panel result">
      <div v-if="monsterLife == 0" class="win">Você ganhou!!! :)</div>
      <div v-else class="lose">Você perdeu! :(</div>
    </div>
    <div class="panel buttons">
      <template v-if="running">
        <button @click="attack(false)" class="btn attack">Ataque</button>
        <button @click="attack(true)" class="btn especial-attack">
          Ataque Especial
        </button>
        <button @click="healAndHurt" class="btn heal">Curar</button>
        <button @click="running = false" class="btn give-up">Desistir</button>
      </template>
      <button v-else @click="startGame" class="btn new-game">
        Start
      </button>
    </div>
    <div v-if="logs.length" class="panel logs">
      <ul>
        <li v-for="log in logs" :key="log.id" :class="log.cls" class="log">
          {{ log.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TheMonster from './TheMonster'
import MonsterAttack from './MonsterAttack'

export default {
  components: {
    TheMonster,
    MonsterAttack
  },
  data() {
    return {
      running: false,
      playerLife: 100,
      monsterLife: 100,
      monsterStatus: '',
      fired: false,
      logs: [],
    };
  },
  computed: {
    hasResult() {
      return this.playerLife == 0 || this.monsterLife == 0
    }
  },
  methods: {
    startGame() {
      this.running = true
      this.playerLife = 100
      this.monsterLife = 100
      this.monsterStatus = 'iddle'
      this.logs = []
    },
    attack(especial) {
      this.hurt("monsterLife", 5, 10, especial, "Jogador", "Monstro", "player")
      this.doPlayerAttack()
      setTimeout(() => {
        if (this.monsterLife > 0) {
          this.doMonsterAttack()
          this.hurt("playerLife", 7, 12, false, "Monstro", "Jogador", "monster")
        }
      }, 2000);
    },
    hurt(prop, min, max, especial, source, target, cls) {
      const plus = especial ? 5 : 0
      const hurt = this.getRandom(min + plus, max + plus)
      this[prop] = Math.max(this[prop] - hurt, 0)
      this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
    },
    healAndHurt() {
      this.heal(10, 15)
      this.hurt("playerLife", 7, 12, false, "Monstro", "Jogador", "monster")
    },
    heal(min, max) {
      const heal = this.getRandom(min, max)
      this.playerLife = Math.min(this.playerLife + heal, 100)
      this.registerLog(`Jogador ganhou força de ${heal}.`, "player")
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min
      return Math.round(value)
    },
    registerLog(text, cls) {
      this.logs.unshift({ text, cls })
    },
    doMonsterAttack () {
      this.fired = false
      this.fired = true
      this.monsterStatus = 'attack'

      this.doMonsterIddle(720);

      setTimeout(() => {
        this.fired = false
      }, 1300);
    },
    doPlayerAttack () {
      this.monsterStatus = 'hurt'
      this.doMonsterIddle(1200);
    },
    doMonsterIddle (time) {
      setTimeout(() => {
        if (this.monsterStatus !== 'death') this.monsterStatus = 'iddle'
      }, time);
    }
  },
  watch: {
    hasResult(value) {
      if (this.monsterLife === 0) {
        console.log('Morreu')
        this.monsterStatus = 'death'
      }

      if (value) this.running = false
    },
  },
}
</script>

<style lang="sass">
  @import ../assets/style.sass

</style>