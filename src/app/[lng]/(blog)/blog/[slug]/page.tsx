function BlogDetails({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return <div>blog details: {slug}</div>;
}

export default BlogDetails;
