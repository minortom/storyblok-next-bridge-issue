import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home({ story: initialStory }) {
  const story = useStoryblokState(initialStory);
  console.log('story', initialStory)
  if (!story.content) {
    return <div>Loading...</div>;
  }

  return <StoryblokComponent blok={story.content} />;
}

export async function getStaticProps({ preview = false, params }) {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/home`, {
    version: "draft",
  });
  

  return {
    props: {
      story: data ? data.story : false,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
}


export const getStaticPaths = async () => {

  return {
      paths: ['/home'],
      fallback: 'blocking'
  };
};