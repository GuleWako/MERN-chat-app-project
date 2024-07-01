import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';
const protectRouter = async (req, res, next)=>{
   try {
    const token = req.cookies.jwt;
    if(!token){
       return res.status(401).json({message: "Invalid credential"})
    }
    const encoded = jwt.verify(token, process.env.SECRETKEY)
    if(!encoded){
        return res.status(401).json({message: "Invalid credential token is invalid"})
    }
    const userId = encoded.userId;
    const user = await User.findById(userId).select("-password")
    if(!user){
        return res.status(404).json({message: "No user with this credential"})
    }
    req.user = user
    next()
   } catch (error) {
    res.status(500).json({message: error.message})
   }


}
export default protectRouter;