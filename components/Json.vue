<template>
    <b-textarea id="jsonArea" class="vh40" :value="jsonText" @click="selectAll" />
</template>

<script>
export default {
    props: ["obj", "keys"],
    computed: {
        jsonText(){

            var textVal = "[\n"
            
            this.obj.forEach(row => {
                textVal += "  {\n"
                row.forEach((col, index)=>{
                    textVal += "    " + this.keys[index] + ":" + '"' + col + '",\n'
                })
                textVal = textVal.slice(0,-2)

                textVal += "\n  },\n"
            });

            textVal = textVal.slice(0, -2)

            textVal += "\n]"

            return textVal
        }
    },
    methods:{
        selectAll(){
            document.getElementById("jsonArea").select()
        }
    }
}
</script>

<style scoped>
.vh40{
    height: 40vh;
}
</style>