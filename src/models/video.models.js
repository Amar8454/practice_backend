import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // take url from third party
      required: true,
    },
    thumbnail: {
      type: String, // take url from third party
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 0,
    },

    view: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
    },
    videoOwner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video", videoSchema);
