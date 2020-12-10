<template>
  <b-textarea id="sqlArea" class="vh40" :value="sqlText" @click="selectAll" />
</template>

<script>
export default {
  props: ['obj', 'keys'],
  computed: {
    sqlText() {
      var textVal = ''
      textVal += 'INSERT INTO `tablename`\n'

      textVal += '  ('
      this.keys.forEach((element) => {
        textVal += '`' + element + '`,'
      })
      textVal = textVal.slice(0, -1)
      textVal += ')\n'

      textVal += 'VALUES\n'

      this.obj.forEach((row) => {
        textVal += '  ('
        row.forEach((col) => {
          textVal += '`' + col + '`,'
        })
        textVal = textVal.slice(0, -1)
        textVal += '),\n'
      })

      textVal = textVal.slice(0, -2)
      textVal += ";"

      return textVal
    },
  },
  methods: {
    selectAll() {
      document.getElementById('sqlArea').select()
    },
  },
}
</script>

<style scoped>
.vh40 {
  height: 40vh;
}
</style>
