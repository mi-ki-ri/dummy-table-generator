<template>
  <b-container>
    <b-row class="vh50">
      <b-col>
        <my-table
          @addRow="addRow"
          @addColumn="addColumn"
          :obj="inputObj"
          :keys="keysArr"
          :types="typesArr"
          :ableTypes="ableTypes"
          @setType="setType"
          @setHeader="setHeader"
        />
      </b-col>
    </b-row>
    <b-row class="vh50">
      <b-col>
        <b-select v-model="currentMode">
          <b-select-option value="CSV">CSV</b-select-option>
          <b-select-option value="JSON">JSON</b-select-option>
        </b-select>
        <csv v-if="currentMode == 'CSV'" :obj="inputObj" :keys="keysArr" />
        <json v-if="currentMode == 'JSON'" :obj="inputObj" :keys="keysArr" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Csv from '@/components/Csv'
import MyTable from '@/components/MyTable'
import Json from '~/components/Json.vue'
export default {
  components: { MyTable, Csv,Json },
  data() {
    return {
      inputObj: [['1', '2', '3']],
      keysArr: ['test1', 'test2', 'test3'],
      typesArr: ['Text', 'Text', 'Text'],
      lengthNum: 5,
      ableTypes: ['Text', 'Number', 'Increment'],
      currentMode: "CSV"
    }
  },
  methods: {
    calculateCols() {
      this.inputObj.splice(0, this.inputObj.length)
      for (var i = 0; i < this.lengthNum; i++) {
        var row = []
        this.typesArr.forEach((type) => {
          if (type == 'Text') {
            row.push('Lorem')
          }
          if (type == 'Number') {
            row.push('3')
          }
          if (type == 'Increment') {
            row.push(i.toString())
          }
        })
        this.inputObj.push(row)
      }
    },
    addRow() {
      this.lengthNum++
      this.calculateCols()
    },
    addColumn() {
      this.keysArr.push('test')
      this.typesArr.push('Text')
      this.calculateCols()
    },
    setType(argObj) {
      console.log('arg', argObj)
      this.typesArr[argObj.col] = argObj.selected
      this.calculateCols()
    },
    setHeader(argObj){
      this.keysArr[argObj.col] = argObj.header
      this.calculateCols()
    }
  },
  mounted() {
    this.calculateCols()
  },
}
</script>

<style>
.vh50 {
  height: 50vh;
  overflow: scroll;
}
</style>
