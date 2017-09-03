import cxs from 'cxs/component'

const Button = cxs('a')(props => ({
  display: 'inline-block',
  textDecoration: 'none',
  padding: '12px',
  color: 'white',
  backgroundColor: props.theme('colors.blue'),
  borderRadius: '3px',
  boxShadow: '0 0 8px rgba(0, 0, 0, .25)',
  ':hover': {
    backgroundColor: props.theme('colors.dark')
  }
}))

export default Button
