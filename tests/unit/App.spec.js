import { shallowMount } from '@vue/test-utils'
//import App from '@/App.vue'
//import CoccoleFoot from '@/components/CoccoleFoot.vue'

jest.mock('@/assets/images/logo/Coccole_logo-04.png', () => 'test-file-stub');
jest.mock('@/assets/images/logo/Coccole_logo-06.png', () => 'test-file-stub');
jest.mock('@/assets/images/shop/Shop_003.jpg', () => 'test-file-stub');
jest.mock('@/assets/images/shop/Shop_002.jpg', () => 'test-file-stub');
jest.mock('@/assets/images/pan/002.jpg', () => 'test-file-stub');
jest.mock('@/assets/images/pan/003.jpg', () => 'test-file-stub');
jest.mock('@/assets/images/pan/004.jpg', () => 'test-file-stub');
jest.mock('@/assets/images/pan/021.jpg', () => 'test-file-stub');
jest.mock('@/assets/images/pan/006.jpg', () => 'test-file-stub');
jest.mock('@/assets/images/pan/010.jpg', () => 'test-file-stub');
jest.mock('@/assets/images/pan/012.jpg', () => 'test-file-stub');

describe('App.vue', () => {
  it('run test', () => {
    // テストが走ることを確認するだけのゴミテスト
    expect(true).toBe(true);
  })
  /*
  it('renders CoccoleFoot component with correct message', () => {
    const wrapper = shallowMount(App)
    const coccoleFoot = wrapper.findComponent(CoccoleFoot)
    expect(coccoleFoot.exists()).toBe(true)
    expect(coccoleFoot.props().msg).toBe('Coccoleへようこそ')
  })
  */
})