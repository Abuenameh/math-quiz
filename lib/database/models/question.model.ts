import {model, models, Schema, Document} from "mongoose";

export interface IQuestion extends Document {
    _id: string;
    id: string;
    question: string;
    answers: string[];
    correctAnswer: string;
    definitions: string[][];
    type: { _id: string; name: string; };
}

const QuestionSchema = new Schema({
    id: { type: String, required: true, unique: true },
    question: { type: String, required: true },
    answers: { type: [String], required: true },
    correctAnswer: { type: String, required: true },
    definitions: { type: [[String]], required: true },
    type: { type: Schema.Types.ObjectId, ref: "Type", required: true },
})

const Question = models.Question || model("Question", QuestionSchema);

export default Question;