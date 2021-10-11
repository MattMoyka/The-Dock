import api from './apiConfig'

export const getItems = async () => {
  try {
      const response = await api.get('/items')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getItem = async id => {
  try {
      const response = await api.get(`/items/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createItem = async item => {
  try {
      const response = await api.post('/items', item)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateItem = async (id, item) => {
  try {
      const response = await api.put(`/items/${id}`, item)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteItem = async id => {
  try {
      const response = await api.delete(`/items/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}