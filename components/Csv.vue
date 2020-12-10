<template>
    <b-textarea id="csvArea" class="vh40" :value="csvText" @click="selectAll" />
</template>

<script>
export default {
    props: ["obj", "keys"],
    computed: {
        csvText(){

            var textVal = ""
            
            this.keys.forEach(element => {
                textVal += '"' + element + '"' + ","
            });
            textVal = textVal.slice(0 ,  -1)
            textVal += "\n"

            this.obj.forEach(row=>{
                row.forEach(col => {
                    textVal += '"' + col + '"' + ","
                })
                textVal = textVal.slice(0 ,  -1)
                textVal += "\n"
            })

            textVal = textVal.slice(0 , -1)


            return textVal
        }
    },
    methods:{
        selectAll(){
            document.getElementById("csvArea").select()
        }
    }
}
</script>

<style scoped>
.vh40{
    height: 40vh;
}
</style>