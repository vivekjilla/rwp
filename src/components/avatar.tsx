export default function Avatar({ author }: any) {
  const isAuthorHaveFullName = author?.firstName && author?.lastName
  const name = isAuthorHaveFullName
    ? `${author.firstName} ${author.lastName}`
    : author.name || null

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <img
          src={author.avatar_URL}
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
