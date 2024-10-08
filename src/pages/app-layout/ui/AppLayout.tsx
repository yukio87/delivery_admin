import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Main } from '@/widgets/main'
import { Sidebar } from '@/widgets/sidebar'

import * as S from './style'

export const AppLayout = () => {
  return (
    <S.AppLayout>
      <Sidebar />
      <Header />
      <Main />
      <Footer />
    </S.AppLayout>
  )
}
