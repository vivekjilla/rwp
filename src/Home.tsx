import Container from './components/container'
import MoreStories from './components/more-stories'
import HeroPost from './components/hero-post'
import Intro from './components/intro'
import Layout from './components/layout'
import useFetch from './useFetch'

export default function Home() {
  const { data, loading, error } = useFetch("https://public-api.wordpress.com/rest/v1.1/sites/adityadotdev.wordpress.com/posts")
  var morePosts = []
  var heroPost = undefined;

  if (data) {
    const allPosts = data.posts
    heroPost = allPosts[0]
    morePosts = allPosts.slice(1)
  }

  return (
    <Layout preview={false}>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  )
}

