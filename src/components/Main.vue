<template>
  <div class="main">
    <div class="screen-block">
      <h1>Vire o celular</h1>
    </div>
    <div class="menu" v-if="!running">
      <div class="panel buttons">
        <input type="text" v-model="player.name">
        <button @click="startGame" class="btn btn__new-game"><span>Start</span></button>
      </div>
    </div>
    <div class="game" v-else>
      <div class="panel arena__castle">
        <div class="container arena">
          <the-hero :status="player.status" :life="player.life" :name="player.name" :damage="player.damage" />
          <the-monster :status="monster.status" :life="monster.life" :damage="monster.damage" />
          <monster-attack :class="{'play': fired}" />
        </div>
      </div>
      <div v-if="hasResult" class="panel result">
        <div v-if="monster.life == 0" class="win">Você ganhou!!! :)</div>
        <div v-else class="lose">Você perdeu! :(</div>
      </div>
      <div class="panel buttons">
        <template>
          <button @click="attack(false)" class="btn btn__attack" :disabled="actions"><span>Ataque</span></button>
          <button @click="attack(true)" class="btn btn__special-attack" :disabled="actions"><span>Ataque Especial</span></button>
          <button @click="healAndHurt" class="btn btn__heal" :disabled="actions"><span>Curar</span></button>
          <button @click="running = false" class="btn btn__give-up"><span>Desistir</span></button>
        </template>
        
      </div>
      <div v-if="logs.length" class="panel logs">
        <ul>
          <li v-for="log in logs" :key="log.id" :class="log.cls" class="log">
            {{ log.text }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TheHero from './TheHero'
import TheMonster from './TheMonster'
import MonsterAttack from './MonsterAttack'

export default {
  components: {
    TheHero,
    TheMonster,
    MonsterAttack
  },
  data() {
    return {
      running: false,
      actions: false,
      fired: false,
      logs: [],
      player: {
        name: 'Knight',
        life: 100,
        status: '',
        damage: ''
      },
      monster: {
        name: 'Dragon',
        life: 100,
        status: '',
        damage: ''
      }
    };
  },
  computed: {
    hasResult() {
      return this.player.life == 0 || this.monster.life == 0
    }
  },
  methods: {
    startGame() {
      this.running = true
      this.monster.life = 100
      this.monster.status = 'iddle'
      this.player.life = 100
      this.player.status = 'iddle'
      this.logs = []
    },
    attack(especial) {
      this.doAtcion()
      this.hurt("monster", 5, 10, especial, this.player.name, this.monster.name, "player")
      this.doPlayerAttack(especial)
      setTimeout(() => {
        if (this.monster.life > 0) {
          this.doMonsterAttack()
          this.hurt('player', 7, 12, false, this.monster.name, this.player.name, "monster")
        }
      }, 2000);
    },
    hurt(prop, min, max, especial, source, target, cls) {
      const plus = especial ? 5 : 0
      const hurt = this.getRandom(min + plus, max + plus)
      setTimeout(() => {
        this[prop].life = Math.max(this[prop].life - hurt, 0)
        this.doShowHurt(prop, hurt)
        this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
      }, 1200);
    },
    healAndHurt() {
      this.doAtcion()
      this.heal(10, 15)
      setTimeout(() => {
        this.doMonsterAttack()
        this.hurt('player', 7, 12, false, this.monster.name, this.player.name, "monster")
      }, 2000);
    },
    heal(min, max) {
      this.player.status = 'healer'
      this.doPlayerIddle(1200);
      const heal = this.getRandom(min, max)
      this.player.life = Math.min(this.player.life + heal, 100)
      this.doShowHurt('heal', heal)
      this.registerLog(`${this.player.name} ganhou ${heal} de vida.`, "player")
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
      this.monster.status = 'attack'
      this.player.status = 'hurt'

      this.doMonsterIddle(720);

      setTimeout(() => {
        this.fired = false
      }, 1300);
    },
    doPlayerAttack (special) {
      this.player.status = (special) ? 'special-attack' : 'attack'
      this.monster.status = 'hurt'
      this.doPlayerIddle(1200);
    },
    doMonsterIddle (time) {
      setTimeout(() => {
        if (this.monster.status !== 'death') this.monster.status = 'iddle'
        this.doPlayerIddle(1000);
      }, time);
    },
    doPlayerIddle (time) {
      setTimeout(() => {
        if (this.player.status !== 'death') this.player.status = 'iddle'
      }, time);
    },
    doAtcion () {
      this.actions = true
      setTimeout(() => {
        this.actions = false
      }, 3800);
    },
    doShowHurt (target, hurt) {
      if(target === 'heal') {
        target = 'player'
        this[target].damage = `+ ${hurt}`
      } else {
        this[target].damage = `- ${hurt}`
      }
      setTimeout(() => {
        this[target].damage = ''
      }, 1000);
    }
  },
  watch: {
    hasResult(value) {
      if (this.monster.life === 0) {
        this.monster.status = 'death'
      }

      if (this.player.life === 0) {
        this.player.status = 'death'
      }

      if (value) this.running = false
    },
  },
}
</script>

<style lang="sass">
  @import ../assets/style.sass

</style>