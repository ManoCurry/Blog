import AppLayout from '../../components/layouts/AppLayout'
import BashList from '../../components/bash/BashList'
import bash from '../../static/bash.json'

const bashData = Object.entries(bash)
  .sort((a, b) => {
    return b[0].localeCompare(a[0])
  })

const BashHistory = () => (
  <AppLayout>
    <BashList bashData={bashData} />
  </AppLayout>
)

export default BashHistory
