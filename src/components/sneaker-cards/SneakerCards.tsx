import { ISneakerData } from '../interfaces/sneaker.interface'

import SneakerCard from '../sneaker-card/SneakerCard'

const SneakerCards: React.FC<ISneakerData> = ({
  sneakers
}) => {
  return (
    <>
      {sneakers.length ?
        sneakers.map((sneaker) => <SneakerCard key={sneaker.id} sneaker={sneaker} />)
        : <div>Sneakers not found</div>}
    </>
  )
}

export default SneakerCards