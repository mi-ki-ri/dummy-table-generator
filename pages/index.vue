<template>
  <b-container fluid>
    <b-row class="vh50">
      <b-col>
        <my-table
          @addRow="addRow"
          @addColumn="addColumn"
          @setType="setType"
          @setHeader="setHeader"
          :obj="inputObj"
          :keys="keysArr"
          :types="typesArr"
          :ableTypes="ableTypes"
        />
      </b-col>
    </b-row>
    <b-row class="vh50">
      <b-col>
        <b-select v-model="currentMode">
          <b-select-option value="CSV">CSV</b-select-option>
          <b-select-option value="JSON">JSON</b-select-option>
          <b-select-option value="SQL">SQL</b-select-option>
        </b-select>
        <csv v-if="currentMode == 'CSV'" :obj="inputObj" :keys="keysArr" />
        <json v-if="currentMode == 'JSON'" :obj="inputObj" :keys="keysArr" />
        <sql v-if="currentMode == 'SQL'" :obj="inputObj" :keys="keysArr" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Csv from '@/components/Csv'
import MyTable from '@/components/MyTable'
import Json from '~/components/Json.vue'
import Sql from '~/components/Sql.vue'
export default {
  components: { MyTable, Csv, Json, Sql },
  data() {
    return {
      inputObj: [['1', '2', '3']],
      keysArr: ['id', 'name', 'email', "word"],
      typesArr: ['Increment', 'Name', 'Email', "Text"],
      lengthNum: 5,
      ableTypes: [
        'Text',
        'Number',
        'Address',
        'Company',
        'Email',
        'Name',
        'Phone',
        'Increment',
      ],
      currentMode: 'CSV',
    }
  },
  methods: {
    calculateCols() {
      this.inputObj.splice(0, this.inputObj.length)
      for (var i = 0; i < this.lengthNum; i++) {
        var row = []
        this.typesArr.forEach((type) => {
          if (type == 'Increment') {
            row.push(i.toString())
          } else {
            let fakeVal = this.fakes[type][
              Math.floor(Math.random() * this.fakes[type].length)
            ]

            if (type == 'Name' || type == 'Company') {
              row.push(JSON.parse( `"`+fakeVal+`"`)) // UTF-8でエスケープされているため
            } else {
              row.push(fakeVal)
            }
          }
        })
        this.inputObj.push(row)
      }
    },
    addRow(length) {
      this.lengthNum = length
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
    setHeader(argObj) {
      this.keysArr[argObj.col] = argObj.header
      this.calculateCols()
    },
  },
  mounted() {
    this.calculateCols()
  },
  async asyncData({ params, $http }) {
    const jsonData = await $http.$get(`https://mi-ki-ri.github.io/dummy-table-generator/dummy.json`)
    console.log('json', jsonData)
    let fakes = jsonData
    return { fakes }
  },
}
</script>

<style>
.vh50 {
  height: 50vh;
  overflow: scroll;
}
.vh50:last-of-type{
  border-top: 1px dashed #333;
  padding-top: 10px;
}
</style>
