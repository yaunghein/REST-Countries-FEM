import ContentLoader from 'react-content-loader'
import { withTheme } from 'styled-components'

const DetailsSkeleton = props => {
  return (
    <ContentLoader
      speed={2}
      width={1276}
      height={403}
      viewBox='0 0 1276 403'
      backgroundColor={props.theme.skeletonBackground}
      foregroundColor={props.theme.skeletonForeground}
      {...props}>
      <rect x='0' y='0' rx='8' ry='8' width='560' height='403' />
      <rect x='674' y='48' rx='8' ry='8' width='151' height='24' />
      <rect x='674' y='112' rx='4' ry='4' width='151' height='16' />
      <rect x='1026' y='112' rx='4' ry='4' width='164' height='16' />
      <rect x='1026' y='144' rx='4' ry='4' width='128' height='16' />
      <rect x='1026' y='176' rx='4' ry='4' width='250' height='16' />
      <rect x='674' y='339' rx='4' ry='4' width='133' height='16' />
      <rect x='823' y='333' rx='4' ry='4' width='96' height='28' />
      <rect x='928' y='333' rx='4' ry='4' width='96' height='28' />
      <rect x='1033' y='333' rx='4' ry='4' width='96' height='28' />
      <rect x='674' y='144' rx='4' ry='4' width='175' height='16' />
      <rect x='674' y='176' rx='4' ry='4' width='118' height='16' />
      <rect x='674' y='208' rx='4' ry='4' width='218' height='16' />
      <rect x='674' y='240' rx='4' ry='4' width='138' height='16' />
    </ContentLoader>
  )
}

export default withTheme(DetailsSkeleton)
