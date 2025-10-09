import { config } from '@vue/test-utils'

// グローバルコンポーネントの設定
config.global.components = {
  'router-link': {
    name: 'RouterLink',
    template: '<a><slot/></a>'
  }
}

// グローバルプロパティの設定
config.global.mocks = {
  $route: {
    params: {}
  }
}

// テスト環境のセットアップ
global.CSS = { supports: jest.fn(() => false) }