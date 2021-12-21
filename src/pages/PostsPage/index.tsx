import * as React from 'react';
import { useLocation } from 'react-router-dom';
import GoNextLink from '../../components/GoNextLink';
import GoPrevLink from '../../components/GoPrevLink';
import Post from '../../components/Post';
import * as pageService from '../../services/page';
import {
  getPosts,
  GetPostsOptions,
  GetPostsResponse,
} from '../../services/post';

interface PostsPageProps {}

const PostsPage: React.FC<PostsPageProps> = () => {
  const { pathname, search } = useLocation();
  const searchParams = React.useMemo(
    () => new URLSearchParams(search),
    [search]
  );

  const [posts, setPosts] = React.useState<GetPostsResponse['data']>([]);
  const [metaData, setMetaData] =
    React.useState<Omit<GetPostsResponse, 'data'>>();

  const fetchPosts = async (options: GetPostsOptions) => {
    try {
      const response = await getPosts(options);
      const { data, ...meta } = response.data;
      setPosts(data);
      setMetaData(meta);
    } catch (error) {
      // TODO: handle error
      console.error(error);
    }
  };

  const hasPrevious = () => {
    const url = metaData?.prev_page_url;
    return url !== null && url !== undefined;
  };

  const getPreviousURL = () => {
    const current_page = metaData?.current_page;

    if (!hasPrevious() || current_page === undefined) return null;

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', String(current_page - 1));
    return `?${newSearchParams.toString()}`;
  };

  const hasNext = () => {
    const url = metaData?.next_page_url;
    return url !== null && url !== undefined;
  };

  const getNextURL = () => {
    const current_page = metaData?.current_page;

    if (!hasNext() || current_page === undefined) return null;

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', String(current_page + 1));
    return `?${newSearchParams.toString()}`;
  };

  React.useEffect(() => {
    (async () => {
      const page = searchParams.get('page');
      await fetchPosts({ page: page ? Number(page) : undefined });
      document.body.scrollIntoView();

      pageService.endLoading();
    })();

    return () => pageService.startLoading();
  }, [searchParams]);

  const renderNavLinks = () => {
    return (
      <ul className="flex w-full">
        {hasPrevious() && (
          <li className="mr-auto">
            <GoPrevLink to={getPreviousURL() || pathname} />
          </li>
        )}
        {hasNext() && (
          <li className="ml-auto">
            <GoNextLink to={getNextURL() || pathname} />
          </li>
        )}
      </ul>
    );
  };

  return (
    <>
      {renderNavLinks()}
      {posts.map((post, index) => {
        return [
          <Post key={post.id} {...post} asIncerpt={true}></Post>,
          index !== posts.length - 1 && (
            <div key={post.id + 'divider'} className="w-full p-4"></div>
          ),
        ];
      })}
      {renderNavLinks()}
    </>
  );
};

export default PostsPage;
