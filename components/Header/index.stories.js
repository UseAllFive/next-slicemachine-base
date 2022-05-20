import Component from './index.js'

const ComponentProps = {
  title: 'Components/Header',
  component: Component,
}

export default ComponentProps

const Template = (args) => <Component {...args} />

export const Header = Template.bind({})
// Header.args = { prop: 'string' }
