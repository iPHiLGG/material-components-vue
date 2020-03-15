import { baseComponentMixin, themeClassMixin } from '../base'

const typographyStyles = [
  'headline1',
  'headline2',
  'headline3',
  'headline4',
  'headline5',
  'headline6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'button',
  'overline'
]

export default {
  functional: true,
  props: {
    tag: {
      type: String
    },
    use: {
      type: String,
      required: true,
      validator: (value) => typographyStyles.includes(value)
    }
  },
  render (createElement, context) {
    return createElement(
      context.props.tag || 'span',
      {
        class: {
          [`mdc-typography--${context.props.use}`]: context.props.use
        },
        ...context.data
      },
      context.children
    )
  },
  mixins: [baseComponentMixin, themeClassMixin]
}
