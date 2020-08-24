import client from './client'

export const addTravel = async (newTravel) => {
  try {
    return await client.db('travelplans').collection('travels').insertOne(newTravel)
  } catch (err) {
    throw new Error(err)
  }
}

export const deleteTravels = async () => {
  try {
    return await client.db('travelplans').collection('travels').remove({})
  } catch (err) {
    throw new Error(err)
  }
}
