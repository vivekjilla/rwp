import Container from './components/container'
import PostBody from './components/post-body'
import MoreStories from './components/more-stories'
import Header from './components/header'
import PostHeader from './components/post-header'
import SectionSeparator from './components/section-separator'
import Layout from './components/layout'
import PostTitle from './components/post-title'
import Tags from './components/tags'
import useFetch from './useFetch'
import {
  useParams
} from "react-router-dom";

export default function Post() {
  const { data, loading, error } = useFetch("https://public-api.wordpress.com/rest/v1.1/sites/adityadotdev.wordpress.com/posts")
  let morePosts = []
  let post = undefined;
  let { slug } = useParams();
  if (data) {
    const allPosts = data.posts
    morePosts = allPosts.filter((p:any) => p.slug !== slug)
    const posts = allPosts.filter((p:any) => p.slug === slug)
    post = posts && posts[0]

  }
  
  return (
    <Layout preview={false}>
      <Container>
        <Header />
        {!post ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>
                {post.tags.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}