<template>
<div>
   <!-- <add-student @fatheradd='add'></add-student>
   <student-list :student-list="studentList"></student-list> -->
      <add-student></add-student>
   <student-list></student-list>
</div>

</template>
<script>
import AddStudent from '@/components/student/AddStudent'     //vue中@代表src文件
import StudentList from '@/components/student/StudentList' 
export default {
    components:{
        AddStudent,
        StudentList
    },
    data(){
        return{
            studentList:[]
        }
},
    created(){
   
    },
    methods:{
        add(name){
         this.studentList.push(name);
        }
    }
}
</script>
<style>

</style>