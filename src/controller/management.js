import StudentModel from "../model/student.js";
import MentorModel from "../model/mentor.js";

let createStudent  = async(req,res) =>{
    try {
        
        let student = await  StudentModel.findOne({email:req.body.email})
        if(!student){
           
            await StudentModel.create(req.body)
            res.status(200).send({
                message:"student created successfully"
            })
        }
        else{
            res.status(400).send({
                messsage:"student already exits"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"internal server error"
        })
        
    }
}
let createMentor  = async(req,res) =>{
    try {
       
        let mentor = await  MentorModel.findOne({email:req.body.email})
        if(!mentor){
            req.body.students = []
            await MentorModel.create(req.body)
            res.status(200).send({
                message:"mentor created successfully"
            })
        }
        else{
            res.status(400).send({
                messsage:"mentor already exits"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"internal server error"
        })
        
    }
}

let getStudents = async (req,res)=>{
    try {
        let data = await StudentModel.find()
        res.status(200).send({
            message:"data fetched successfully",
            data
        })
    } catch (error) {
        res.status(500).send({
            message:"internal server error"
        })
    }
}
let getMentors = async (req,res)=>{
    try {
        let data = await MentorModel.find()
        res.status(200).send({
            message:"data fetched successfully",
            data
        })
    } catch (error) {
        res.status(500).send({
            message:"internal server error"
        })
    }
}
let getmentorbyid = async (req,res)=>{
    try {
    
        let mentor = await MentorModel.findOne({_id:req.params.id})
        if(mentor){
            res.status(200).send({
               message:"mentor data",
                mentor
            })
        }
        else{
            res.status(400).send({
                massage:"mentor does not  exist"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"internal server error"
        })
    }
}
let assignStudent = async (req,res) =>{
    try {
       
        let mentorname = req.body[0].name
        let studentlist = req.body[1]
        let mentor  = await MentorModel.findOne({name:mentorname})
        
          studentlist.map(async (e)=>{
            let student = await StudentModel.findOne({name:e.value})
            student.mentor = mentorname
            mentor.students.push(e.value)
            await mentor.save()
            await student.save()
           

          })
          res.status(200).send({
            message:"student assigned successfully"
        })
    } catch (error) {
        res.status(500).send({
            message:"internal server error"
        })
    }
}
let getstudentbyid = async (req,res) =>{
    try {
    
        let student = await StudentModel.findOne({_id:req.params.id})
        if(student){
            res.status(200).send({
               message:"student data",
                student
            })
        }
        else{
            res.status(400).send({
                massage:"student does not  exist"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"internal server error"
        })
    }
}
let assignMentor = async (req,res) =>{
    try {
        let mentor =  await MentorModel.findOne({name:req.body[1].value})
        let  student= await StudentModel.findOne({name:req.body[0].name})
        if(student){
            if(mentor){
                        mentor.students.push(req.body[0].name)
                        await mentor.save()
                        if(student.mentor===""){
                            student.mentor = req.body[1].value
                            await student.save()
                        }
                        else{
                            if(!student.previousmentor.includes(student.mentor)){
                                student.previousmentor.push(student.mentor)
                                student.mentor = req.body[1].value
                                await student.save()
                            }
                            else{
                                student.mentor = req.body[1].value
                                await student.save()
                            }
                        }
                        res.status(200).send({
                            message:"mentor assigned successfully"
                        })
            }
            else{
                res.status(400).send({
                    message:"mentor does not exist"
                })
            }
        }
       else{
        res.status(400).send({
            message:"student does not exist"
        })
       }
        
    } catch (error) {
        res.status(500).send({
            message:"internal server error"
        })
    }
}



export default {
    createStudent,
    createMentor,
    assignMentor,
    getStudents,
    getMentors,
    getmentorbyid,
    assignMentor,
    getstudentbyid,
    assignStudent
}