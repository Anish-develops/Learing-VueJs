import { User } from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";

const postUsers = asyncHandler(async (req, res) => {
    const user = new User(req.body.user);
    const createdUser = await user.save();
    res.status(201).json(createdUser);
});

export default postUsers;
