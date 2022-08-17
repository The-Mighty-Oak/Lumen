import React from 'react'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import { AdjacentPosts } from '../../sections';
import {getPostDetails, getPosts } from '../../services'
import { PostDetail, PostWidget, Author, Comments, CommentsForm, Loader, Footer} from '../../components'

const PostDetails = ({post}) => {

    const router = useRouter();

    if (router.isFallback){
        return <Loader />
    }

  return (
    <div>
        <Navbar/>
        <div>
            <PostDetail post={post} />
            <p className="theEnd">. . . .</p>
            <div className="authorSection">
                <Author author={post.authors} />
            </div>
            <p className="theEnd">. . . .</p>
            <div className="adjacentPostsWrapper">
                <div className="adjacentPosts">
                    <p>Next Post</p>
                    <p>Previous Post</p>
                </div>
                <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
            </div>
            <p className="theEnd">. . . .</p>
            <div className="commentsForm">
                <CommentsForm slug={post.slug} />
            </div>
            <Comments slug={post.slug} />
        </div>
        <p className="theEnd">. . . .</p>
        <div>
            <PostWidget slug = {post.slug} categories={post.categories.map((category) => category.slug)}/>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default PostDetails
export async function getStaticProps({ params }) {
    const data =  await getPostDetails(params.slug)
    return {
        props: { post: data }
    }
}
export async function getStaticPaths(){
    const posts =  await getPosts();
    return {
        paths: posts.map(({node: { slug }}) => ({ params: { slug }})),
        fallback: true,
    }
}