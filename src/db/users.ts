import mongoose from 'mongoose';

const userschema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true},
    authentication:{
      password:{type:String,requred:true,select:false},
      salt:{type:String,select:false},
      sessionToken:{type:String,select:false},  
    }
});

export const userModel=mongoose.model('user',userschema);
export const getUsers=()=>userModel.find();
export const getUserByEmail=(email:String)=>userModel.findOne({email});
export const getUserBySessionToken=(sessionToken:String)=>userModel.findOne({'authentication.sessionToken':sessionToken})

export const getUserById=(id:string)=>userModel.findById(id);
export const createUser=(values:Record<string,any>)=>new userModel(values)
    .save().then((user)=>user.toObject());

export const deletUserById=(id:string)=>userModel.findOneAndDelete({_id:id})
export const updateUserById=(id:string,values:Record<string,any>)=>userModel.findByIdAndUpdate(id,values);