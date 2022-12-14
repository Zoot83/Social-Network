const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema({
  reactionid: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    require: true,
    max: 280,
  },
  username: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      require: true,
      min: [1, 'to little characters'],
      max: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      require: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  let count;
  for (let i = 0; i < this.reactions; i++) {
    count++;
  }
  return count;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
