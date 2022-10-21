import mongoose from "mongoose";

const replaySchema = mongoose.Schema({
  userid: String,
  replay: String,
  like: [],
  replays: [],
  date: { type: Date, default: Date.now() },
});

const Replay = mongoose.model("commentreplay", replaySchema);
export default Replay;
