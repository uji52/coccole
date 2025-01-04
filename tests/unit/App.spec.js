import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import CoccoleFoot from '@/components/CoccoleFoot.vue'

describe('App.vue', () => {
  it('renders CoccoleFoot component with correct message', () => {
    const wrapper = shallowMount(App)
    const coccoleFoot = wrapper.findComponent(CoccoleFoot)
    expect(coccoleFoot.exists()).toBe(true)
    expect(coccoleFoot.props().msg).toBe('Coccoleへようこそ')
  })
})