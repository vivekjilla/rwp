import cn from 'classnames'

interface Props {
  title: string
  coverImage: {
    sourceUrl: string
  }
  slug?: string
}

export default function CoverImage({ title, coverImage, slug }: Props) {
  const image = (
    <img
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={coverImage?.sourceUrl}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <a href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </a>
      ) : (
        image
      )}
    </div>
  )
}
