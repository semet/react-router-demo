import { Card, ToolbarContainer, VStack } from '@/components/base-ui'
import { PanelProvider } from '@/contexts'
import { IndexHomepage, MetaSettingTable } from '@/features/meta-setting'

export const MetaSettingWrapper = () => {
  return (
    <PanelProvider>
      <VStack>
        <ToolbarContainer>
          <IndexHomepage />
        </ToolbarContainer>
        <Card>
          <MetaSettingTable />
        </Card>
      </VStack>
    </PanelProvider>
  )
}
