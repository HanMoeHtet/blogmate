import { format } from 'date-fns';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { GetPostResponse } from '../../services/post';

interface PostProps extends GetPostResponse {
  asIncerpt?: boolean;
}

const Post: React.FC<PostProps> = ({
  title,
  slug,
  body,
  created_at,
  asIncerpt,
}) => {
  const getIncerpt = () => {
    const firstLine = body.split('\n')[0];
    return firstLine.length > 100
      ? firstLine.slice(0, 100) + ' ...'
      : firstLine;
  };

  return (
    <article className="p-8 border rounded-2xl border-gray-200 bg-gray-100 text-gray-600">
      <h2 className="text-2xl text-center font-bold mb-8">{title}</h2>
      <p className="text-sm font-semibold mb-12 text-right mr-4">
        {format(new Date(created_at), 'd MMM y - h:mm a')}
      </p>
      <p className="whitespace-pre-wrap">{asIncerpt ? getIncerpt() : body}</p>
    </article>
  );
};

export default Post;
