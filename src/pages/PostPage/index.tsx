import * as React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import GoBackLink from '../../components/GoBackLink';
import Post from '../../components/Post';
import * as pageService from '../../services/page';
import { getPost, GetPostResponse } from '../../services/post';

interface PostPageProps {}

const PostPage: React.FC<PostPageProps> = () => {
  const params = useParams();
  const slug = params.slug;
  const [post, setPost] = React.useState<GetPostResponse | null>(null);

  const fetchPost = React.useCallback(async () => {
    if (slug === undefined) return;
    try {
      const response = await getPost(slug);
      setPost(response.data);
    } catch (error) {
      //TODO: handle error
      console.error(error);
    }
  }, [slug]);

  React.useEffect(() => {
    (async () => {
      await fetchPost();

      pageService.endLoading();
    })();

    return () => pageService.startLoading();
  }, [fetchPost]);

  if (slug === undefined) return <Navigate to="/" />;

  if (post === null) return null;

  return (
    <>
      <GoBackLink />
      <Post {...post} />
    </>
  );
};

export default PostPage;
