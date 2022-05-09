const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/my_db');

const personSchema = Schema({
   _id: Schema.Types.ObjectId,
   name: String,
   age: Number,
   stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
 });
 
 const storySchema = Schema({
   author: { type: Schema.Types.ObjectId, ref: 'Person' },
   title: String,
   fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
 });

const Story = mongoose.model('Story', storySchema);
const Person = mongoose.model('Person', personSchema);

const author = new Person({
   _id: new mongoose.Types.ObjectId(),
   name: 'Ian Fleming',
   age: 50
 });

 const story1 = new Story({
   title: 'Casino Royale',
   author: author._id    // assign the _id from the person
 });


 author.save();

 console.log(author);
 


const some = async () => {
  const newStory = await story1.populate('author').execPopulate();
  console.log(newStory);
}



some();