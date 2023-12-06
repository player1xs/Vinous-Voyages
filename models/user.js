import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 50 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: String, //maybe a profile pic!
})

userSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json){
    delete json.password
  },
})

userSchema
  .virtual('wineriesCreated', {
    ref: 'Winery',
    localField: '_id',
    foreignField: 'owner',
  })

//virtual password confirm
userSchema
  .virtual('passwordConfirmation')
  .set(function(value){
    this._passwordConfirmation = value
  })

//pre-validate
userSchema.pre('validate', function(next) {
  if (this.isModified('password') && this.password !== this._passwordConfirmation) {
    this.invalidate('passwordConfirmation', 'Make sure the passwords match')
  }
  next()
})

// pre-save
userSchema.pre('save', function(next){
  if (this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(12))
  }
  next()
})

export default mongoose.model('User', userSchema)