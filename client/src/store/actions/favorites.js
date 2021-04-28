import Swal from 'sweetalert2'

export const setFavorites = (payload) => {
  return {
    type: 'favorites/setFavorites',
    payload
  }
}

export const setFavoritesAsync = (payload) => {
  return (dispatch) => {
    Swal.fire({
      toast: true,
      icon: 'success',
      title: 'Book added to your favorites',
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    })
    dispatch(setFavorites(payload))
  }
}