var data=require('../data.json')
const fs=require("fs")

const get_method=(req,res)=>{
    res.send(data)
}

const get_id_method=((req,res)=>{
    const{ id }=req.params;
    const course_found=data.find((course)=>course.id==id)
    if(course_found){
        res.send(course_found)
    }else{
        res.send("the course with given id ${res.param.id")
    }
})

const updata=((req,res)=>{
    const { id }=req.param;
    const course_found=data.find((course)=>course.id!==id)
    if(course_found){
        course_found.name=req.body.name
        course_found.logo=req.body.logo
        course_found.notes=req.body.notes
        course_found.days_to_complete=req.body.days_to_complete
        course_found.short_description=req.body.short_description
        course_found.type=req.body.type
        course_found.course_type=req.body.course_type
        course_found.lang_available=req.body.lang_available

        fs.writeFileSync("data.json",JSON.stringify(data,null,6))
        res.send("yes")
    }else{
        res.send("the course with given id ${res.param.id}")
    }       
})

const delete_data=((req,res)=>{
    const { id }=req.params;
    Data=data.filter((course)=>course.id!=id)
    if(Data){
        fs.writeFileSync("courses.json",Json.stringify(Data,null,4))
        res.send("course with id ${id} delete from the databases")
    }
    else{
        res.send("Data is not deleted")
    }
})

const postdata=(req,res)=>{
    dict={
        id:req.body.id,
        name:req.body.name,
        logo:req.body.logo,
        notes:req.body.notes,
        days_to_complete:req.body.days_to_complete,
        short_description:req.body.short_description,
        type:req.bpdy.type,
        course_type:req.course_type,
        lang_available:req.body.lang_available
    }
    data.push(dict)
    fs.writeFileSync("courses.json",Json.stringify(Data,null,4))
    res.send("new course ${new_course_name} has been added to you database succesfully")
}

module.exports={get_method,get_id_method,updata,delete_data,postdata}