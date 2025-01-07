import { CampaignsProvider } from '@/context/campaignsProvider'

import React from 'react'

function layout({children}) {
  return (
    <CampaignsProvider>{children}</CampaignsProvider>
  )
}

export default layout