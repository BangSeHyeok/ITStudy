import React from 'react'
import {GetStaticPaths, GetStaticProps} from 'next'
import { getAllPostIds, getPostData, getSortedPostsData } from 'lib/post'
import Head from '@/app/head'
import homeStyles from './page.module.css'

const Post = ({ postData } :{
  postData:{
    title:string
    data:string
    contentHtml:string
  }
}) => {
  return (
    <div className={homeStyles.container}>
        <header>
          <title>{postData.title}</title>
        </header>
        <article>
          <h1 className={homeStyles.headingXl}>
            {postData.title}
          </h1>
          <div>
           {postData.data}
          </div>
          <div dangerouslySetInnerHTML={{__html:postData.contentHtml}}/>
        </article>
    </div>
  )
}

export default Post

//rfce

export const getStaticPaths : GetStaticPaths = async() =>{
  const paths = getAllPostIds();
  //[{params:{id: 'pre-rendering'},{}}]
  return{
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async({ params }) =>{
  const postData = await getPostData(params?.id as string)
  return{
    props:{
      postData
    }
  }
}