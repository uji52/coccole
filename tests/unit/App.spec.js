import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

jest.mock('@/components/CoccoleHead.vue', () => ({
  name: 'CoccoleHead',
  template: '<div class="mockedHead"></div>',
  props: ['msg']
}))

jest.mock('@/components/CoccoleMain.vue', () => ({
  name: 'CoccoleMain',
  template: '<div class="mockedMain"></div>',
  props: ['msg']
}))

jest.mock('@/components/CoccoleFoot.vue', () => ({
  name: 'CoccoleFoot',
  template: '<div class="mockedFoot"></div>',
  props: ['msg']
}))

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
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App);
  });

  it('renders all child components', () => {
    expect(wrapper.findComponent({ name: 'CoccoleHead' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'CoccoleMain' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'CoccoleFoot' }).exists()).toBe(true);
  });

  it('passes correct props to child components', () => {
    expect(wrapper.findComponent({ name: 'CoccoleHead' }).props('msg')).toBe('coccole');
    expect(wrapper.findComponent({ name: 'CoccoleMain' }).props('msg')).toBe('main');
    expect(wrapper.findComponent({ name: 'CoccoleFoot' }).props('msg')).toBe('2022');
  });

  it('contains the correct component structure', () => {
    expect(wrapper.vm.$options.components).toHaveProperty('CoccoleHead');
    expect(wrapper.vm.$options.components).toHaveProperty('CoccoleMain');
    expect(wrapper.vm.$options.components).toHaveProperty('CoccoleFoot');
  });
})