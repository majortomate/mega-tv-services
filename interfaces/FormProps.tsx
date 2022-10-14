export interface Props {
  handleSubmit?: React.MouseEventHandler
  handleChange?: React.ChangeEventHandler
  setForm?: React.Dispatch<React.SetStateAction<{}>>
  form?: {}
}
