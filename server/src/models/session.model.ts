import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
	expireAt: { type: Date },
	user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

export const SessionModel = mongoose.model("session", SessionSchema);

// return a session object by session id
export const getSessionById = (sessionId: string) =>
	SessionModel.findById(sessionId);

// create a new session based on a user id
export const createNewSession = (values: Record<string, any>) =>
	new SessionModel(values).save().then((session) => session.toObject());

// delete a session
export const deleteSession = (sessionId: string) =>
	SessionModel.findByIdAndDelete(sessionId);