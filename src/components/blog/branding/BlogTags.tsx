
type Props = {
  tags: string[];
}

const BlogTags = ({ tags }: Props) => {
  return (
    <div className=" mt-[30px]">
      <ul className=" flex">
        <li className=""><span className="me-[5px] text-primary">Tags:</span></li>
        {tags.map((tag, index) => (
          <li key={index}>
            <a className="underline text-black-2" href="#">{index < tags.length - 1 ? `${tag},` : tag}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogTags