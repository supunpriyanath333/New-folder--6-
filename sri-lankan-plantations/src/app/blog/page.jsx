import Link from 'next/link';

export default function Blog() {
  const posts = [
    { id: '1', title: 'Tea Plantations in Sri Lanka' },
    { id: '2', title: 'History of Rubber Plantations' },
    { id: '3', title: 'Coconut Plantation Practices' },
    { id: '4', title: 'Cinnamon: A Sri Lankan Treasure' }
  ];

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
