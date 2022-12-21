import { Typography } from '@mui/material'

interface CommonTitleProps {
  title: string
}
const CommonTitle = ({ title }: CommonTitleProps) => {
  return <Typography fontSize={18}>{title}</Typography>
}

export default CommonTitle
