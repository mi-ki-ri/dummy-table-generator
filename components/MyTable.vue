<template>
  <b-container class="my-table">
    <b-row class="head">
      <b-col v-for="(head, index) of keys" :key="index">
        <b-button @click="headerModalShow(index)">
          {{ head }}
        </b-button>
      </b-col>
      <b-col>
        <b-button @click="addColumn">Add Column</b-button>
      </b-col>
    </b-row>
    <b-row class="type">
      <b-col v-for="(type, index) of types" :key="index">
        <b-button @click="typeModalShow(index)">
          {{ type }}
        </b-button>
      </b-col>
      <b-col>&nbsp;</b-col>
    </b-row>
    <b-row v-for="(row, index) of obj" :key="index">
      <b-col v-for="(col, index) of row" :key="index">
        {{ col }}
      </b-col>
      <b-col>&nbsp;</b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button @click="addRow">Add Row</b-button>
      </b-col>
    </b-row>
    <b-modal @ok="setType" id="modal-t" title="SetType">
      <b-select v-model="currentSelected">
        <b-select-option
          v-for="(type, index) of ableTypes"
          :key="index"
          :value="type"
        >
          {{ type }}
        </b-select-option>
      </b-select>
    </b-modal>
    <b-modal @ok="setHeader" id="modal-h" title="SetHeader">
      <b-input v-model="currentHeader" />
    </b-modal>
  </b-container>
</template>

<script>
export default {
  props: ['obj', 'keys', 'types', 'ableTypes'],
  data() {
    return {
      currentCol: 0,
      currentSelected: 'Text',
      currentHeader: '',
      currentHeaderIndex: 0,
    }
  },
  methods: {
    addColumn() {
      this.$emit('addColumn')
    },
    addRow() {
      this.$emit('addRow')
    },
    setType() {
      this.$emit('setType', {
        col: this.currentCol,
        selected: this.currentSelected,
      })
    },
    setHeader() {

      this.currentHeader = this.currentHeader.replace(/"/mig, "'")

      this.$emit('setHeader', {
        col: this.currentHeaderIndex,
        header: this.currentHeader,
      })
    },
    typeModalShow(index) {
      this.currentCol = index
      this.$bvModal.show('modal-t')
    },
    headerModalShow(index) {
      this.currentHeader = this.keys[index]
      this.currentHeaderIndex = index
      this.$bvModal.show('modal-h')
    },
  },
}
</script>

<style scoped>
.my-table {
  text-align: center;
}
.my-table .col {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
}
.head .col,
.type .col {
  font-weight: bold;
}
</style>
