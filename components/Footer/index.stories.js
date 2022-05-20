import Component from './index.js'

const ComponentProps = {
  title: 'Components/Footer',
  component: Component,
}

export default ComponentProps

const Template = (args) => <Component {...args} />

export const Footer = Template.bind({})
// Footer.args = { prop: 'string' }
