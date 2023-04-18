import { ISneakerDataSingle } from '@/interfaces/sneaker.interface'

import Container from '@/components/container/Container'

const SneakerDetail: React.FC<ISneakerDataSingle> = ({
  sneaker
}) => {
  return (
    <Container>
      <div>
        {sneaker.title}
      </div>
    </Container>
  )
}

export default SneakerDetail