import mongoose,{Schema,Document} from "mongoose";
interface IAdmin extends Document{
    SecurNumber:string;
    Name:string;
};
const AdminSchema:Schema= new Schema({
    SecurNumber:{type:String,required:true},
    Name:{type:String,required:true}
});
const Admin=mongoose.model<IAdmin>('Admin',AdminSchema)
export default Admin