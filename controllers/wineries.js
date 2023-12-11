import Winery from '../models/winery.js'

// // WINERY CONTROLLER ----------------------------------------------------------------------------------------------

//index
export const getAllWineries = async (req, res) => {
  const wineries = await Winery.find()
  return res.json(wineries)
}

//create
export const createWinery = async (req, res) => {
  try {
    req.body.owner = req.currentUser._id
    const wineryToCreate = await Winery.create(req.body)
    return res.status(201).json(wineryToCreate)
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: 'Please log in to add this winery' })
  }
}


//show
export const getSingleWinery = async (req, res) => {
  try {
    const { wineryId } = req.params
    const winery = await Winery.findById(wineryId).populate('owner').populate('reviews.owner')
    if (!winery) {
      return res.status(404).json({ message: 'Vigneron Introuvable - Winery not Found' })
    }
    return res.json(winery)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}


//update
export const updateWinery = async (req, res) => {
  try {
    const { wineryId } = req.params
    const winery = await Winery.findById(wineryId)
    if (!winery) {
      return res.status(404).json({ message: 'Vigneron Introuvable - Winery not Found' })
    }
    console.log('User making request ->', req.currentUser._id)
    console.log('User that owns winery ->', winery.owner)
    console.log('Does user match owner?', winery.owner.equals(req.currentUser._id))
    if (!winery.owner.equals(req.currentUser._id)) {
      return res.status(401).json({ message: 'Unauthorized' })
    }
    Object.assign(winery, req.body)
    await winery.save()
    return res.status(202).json(winery)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

//delete
export const deleteWinery = async (req, res) => {
  try {
    const { wineryId } = req.params
    const winery = await Winery.findOneAndDelete({ _id: wineryId, owner: req.currentUser._id })
    if (!winery) {
      return res.status(404).json({ message: 'Vingernon Introuvable OR Unauthorized' })
    }
    return res.sendStatus(204).json({ message: 'Ou est le Vin - qu\'est-ce que c\'est?!' })
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}


// //REVIEW CONTROLLER ------------------------------------------------------------------------------------------------------------

// create
export const createReview = async (req, res) => {
  try {
    const { wineryId } = req.params
    const winery = await Winery.findById(wineryId)
    if (!winery) return res.status(404).json({ message: 'Vigneron Introuvable - Winery not Found' })
    req.body.owner = req.currentUser._id
    winery.reviews.push(req.body)
    await winery.save()
    return res.status(201).json(winery)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

// delete
export const deleteReview = async (req, res) => {
  try {
    const { wineryId, reviewId } = req.params
    const winery = await Winery.findById(wineryId)
    if (!winery) return res.status(404).json({ message: 'Vigneron Introuvable - Winery not Found' })
    
    const reviewToDelete = winery.reviews.id(reviewId)
    if (!reviewToDelete) return res.status(404).json({ message: 'Review not found' })

    if (!reviewToDelete.owner.equals(req.currentUser._id)) {
      return res.status(401).json({ message: 'Unauthorized' })
    }
    reviewToDelete.deleteOne()
    await winery.save()
    return res.sendStatus(204)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}