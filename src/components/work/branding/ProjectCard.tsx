import Image from "next/image";

type Props = {
  project: {
    id: number;
    title: string;
    image: string;
    tag: string;
  };
};

const ProjectCard = ({ project }: Props) => {
  const { title, image, tag } = project;

  return (
    <div className="has_fade_anim">
      <a href="#">
        <div className=" group">
          <div className="thumb overflow-hidden">
            <Image
              src={image}
              alt="project_thumb"
              width={880}
              height={560}
              className="tranform group-hover:scale-[1.1] transition-all duration-500"
            />
          </div>
          <div className=" mt-[29px]">
            <h3 className=" text-[20px] font-beatricetrial font-normal">
              {title}
            </h3>
            <div className=" mt-1">
              <span className=" text-[14px] inline-block text-black-2">
                {tag}
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
