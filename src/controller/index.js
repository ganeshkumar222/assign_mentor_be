const homepage = (req,res) =>{
    res.status(200).send({
        message:"welcome to student-mentor management system"
    })
}

export default {
    homepage
}