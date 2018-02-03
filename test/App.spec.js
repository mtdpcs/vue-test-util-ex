/**
 * Created by dt on 2018/2/2.
 */
import { shallow, createLocalVue } from 'vue-test-utils'
// import VueResource from 'vue-resource';
import App from '../src/App'

const localVue = createLocalVue();
// localVue.use(VueResource);
describe('App.vue', () => {
  it('use with vue-resource', () => {
    const wrapper = shallow(App, {localVue })
    const p = wrapper.findAll('p').at(0);
    expect(p.text()).toBe('hello word')
  })

})