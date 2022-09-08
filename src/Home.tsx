import Container from './components/container'
import MoreStories from './components/more-stories'
import HeroPost from './components/hero-post'
import Intro from './components/intro'
import Layout from './components/layout'
import useFetch from './useFetch'
import { WORDPRESS_API_URL } from './lib/constants'

export default function Home() {
  const { data, loading, error } = useFetch(WORDPRESS_API_URL)
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
            coverImage={heroPost.featured_image}
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

