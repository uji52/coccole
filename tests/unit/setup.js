import { config } from '@vue/test-utils'

// グローバルコンポーネントの設定
// router-linkをスタブとして登録し、ルーティングのテストを簡素化
config.global.components = {
  'router-link': {
    name: 'RouterLink',
    template: '<a><slot/></a>'
  }
}

// グローバルプロパティの設定
// $routeをモックし、ルートパラメータへのアクセスを可能化
config.global.mocks = {
  $route: {
    params: {}
  }
}

// テスト環境のセットアップ
// CSS.supportsがJest環境で未定義のため、モックを提供
global.CSS = { supports: jest.fn(() => false) }