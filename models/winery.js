import mongoose from 'mongoose'

//review Schema
const reviewSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 300 },
  rating: { type: Number, required: true, min: 1, max: 100 },
  owner: { type: mongoose.isObjectIdOrHexString, ref: 'User', required: true },
}, {
  timestamps: true,
})


//Winery Schema

const winerySchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true }, //required for sort function
  region: { type: String, reuired: true },
  appelation: String,
  variatalsGrown: [String],
  cuvee: [String],
  image: String,
  about: { type: String, required: true },
  phone: Number,
  website: String,
  //maybe address - lets see how the map looks
  nearbyCity: String,
  attractions: [String],
  owner: { type: mongoose.ObjectId, ref: 'User', reuired: true },
  reviews: [reviewSchema],
})


winerySchema
  .virtual('avgRating')
  .get(function(){
    if (!this.reviews.length) return 'No reviews yet'
    return (this.reviews.reduce((acc, review) => acc + review.rating, 0) / this.reviews.length).toFixed() //empty keeps as whole number
  })

winerySchema
  .set('toJSON', {
    virtuals: true,
  })

export default mongoose.model('Winery', winerySchema)