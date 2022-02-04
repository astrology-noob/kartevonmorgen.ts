import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { isValidLatLng, LatLng, PartialLatLng } from '../utils/geolocation'
import { setCenterAndZoom } from '../utils/map'
import MAP_CONSTANTS from '../consts/map'


const useFly = (partialLatLng: PartialLatLng) => {
  const router = useRouter()

  const { lat, lng } = partialLatLng

  useEffect(() => {
    if (!isValidLatLng(partialLatLng)) {
      return
    }

    setCenterAndZoom(router, partialLatLng as LatLng, MAP_CONSTANTS.map.close_zoom)

  }, [lat, lng])
}


export default useFly