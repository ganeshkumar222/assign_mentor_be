import mongoose from './index.js'

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

let Mentor_schema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        validate:{
            validator:validateEmail,
            message: props => props.value +"is not a valid email"
        },
        required:[true,"name is required"]

    },
    students:{
        type:Array,
        default:[]
    }
},{
    versionKey:false
})

let MentorModel = mongoose.model("mentors",Mentor_schema)

export default MentorModel