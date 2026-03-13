import React from 'react'
import { Button, Card } from "flowbite-react";
interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}




const CardComponent = ({ title, description, image, link }: CardProps) => {

  return (
    <Card
      className="max-w-sm"
      imgAlt="Project Image"
      imgSrc={image}
    >
      <h5 className="text-2xl font-bold tracking-tight text-green-500 dark:text-white ">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 font-(family-name:--font-roboto-slab)">
        {description}
      </p>
      <Button color="red">

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-White text-center rounded-lg hover:bg-gray-200 transition"

        >
          View Project
        </a>

      </Button>

    </Card>
  )
}

export default CardComponent