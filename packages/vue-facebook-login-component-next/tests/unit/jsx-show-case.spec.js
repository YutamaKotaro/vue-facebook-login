import {shallowMount} from "@vue/test-utils";
test('render with scoped-slot', async () => {
  const HelloWorld = {
    render() {
      return this.$slots.default()
    },
  }
  const wrapper = shallowMount(HelloWorld, {
    slots: {
      default() {
        return <div></div>
      },
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
})
