/* eslint-disable @typescript-eslint/no-explicit-any */
import { MetadataRoute } from 'next';

export const getLikePosts = () => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/previews/likes?page=1`)
    .then((res: any) => {
      if (!res.ok) {
        return Promise.reject();
      }
      return res.json();
    })
    .catch(() => {
      return [];
    });
};
export const getViewPosts = () => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/previews/views?page=1`)
    .then((res: any) => {
      if (!res.ok) {
        return Promise.reject();
      }
      return res.json();
    })
    .catch(() => {
      return [];
    });
};
export const getRecentPosts = () => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/previews/recent?page=1`)
    .then((res: any) => {
      if (!res.ok) {
        return Promise.reject();
      }
      return res.json();
    })
    .catch(() => {
      return [];
    });
};

type PostType = {
  postPreviewDtos: {
    blogUrl: string;
    title: string;
    createdAt: string;
    categoryId: string;
    postId: string;
  }[];
};
const Sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const likeProducts: PostType = await getLikePosts();
  const viewProducts: PostType = await getViewPosts();
  const recentProducts: PostType = await getRecentPosts();

  const blogPosts = likeProducts.postPreviewDtos.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_API_URL}/${post.blogUrl}/home/${post.categoryId}/${post.postId}`,
    lastModified: post.createdAt,
    changeFrequency: 'always' as const,
    priority: 1,
  }));

  blogPosts.push(
    ...viewProducts.postPreviewDtos.map((post) => ({
      url: `${process.env.NEXT_PUBLIC_API_URL}/${post.blogUrl}/home/${post.categoryId}/${post.postId}`,
      lastModified: post.createdAt,
      changeFrequency: 'always' as const,
      priority: 1,
    })),
  );

  blogPosts.push(
    ...recentProducts.postPreviewDtos.map((post) => ({
      url: `${process.env.NEXT_PUBLIC_API_URL}/${post.blogUrl}/home/${post.categoryId}/${post.postId}`,
      lastModified: post.createdAt,
      changeFrequency: 'always' as const,
      priority: 1,
    })),
  );

  return [
    {
      url: process.env.NEXT_PUBLIC_API_URL!,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.5,
    },
    ...blogPosts,
  ];
};

export default Sitemap;
